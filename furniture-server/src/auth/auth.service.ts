import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { randomBytes, scrypt as _scrypt, timingSafeEqual } from 'crypto';
import { promisify } from 'util';
import { UsersService } from '../users/users.service';
import { RegisterDto } from 'src/users/dto/user-register.dto';
import { LoginDto } from 'src/users/dto/user-login.dto';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwt: JwtService,
  ) {}

  // ------------------ REGISTER ------------------
  async register(dto: RegisterDto) {
    const existing = await this.usersService.findByEmail(dto.email);
    if (existing) throw new UnauthorizedException('Email already exists');

    const hashedPassword = await this.hashPassword(dto.password);

    const user = await this.usersService.create({
      ...dto,
      password: hashedPassword,
    });

    const tokens = await this.generateTokens(
      user.id,
      user.email,
      user.fullName,
    );
    return { user, ...tokens };
  }

  // ------------------ LOGIN ------------------
  async login(dto: LoginDto) {
    // now we make lockout for 15 min , if someone write the credenetails wrong for like 5 attempts , we will lockout his account for 15 mins
    // first : define the time he login in first time and soo on , invalid credentials until he reaches to 5 , the account will be locked for 15 min but we will not show this message.
    // define max_attempts , locktime to enusre the user dont exceed this period and make condition if he exceed max attempts and update the lockuntil from now plus 15 mins and reset failedLoginAttempt to 0 update this data in user's table
    // if user comes after 13 min from now , the condittion of now < user.lockuntil will be true and the message will show to user.
    const user = await this.usersService.findByEmail(dto.email);
    if (!user) throw new UnauthorizedException('Invalid credentials');
    const now = Date.now();
    if (user.lockUntil && now < user.lockUntil) {
      throw new UnauthorizedException('Account is temp locked ,Try Later');
    }

    const isValid = await this.verifyPassword(dto.password, user.password);
    if (!isValid) {
      user.failedLoginAttempt = (user.failedLoginAttempt || 0) + 1;
      const MAX_ATTEMPTS = 5;
      const LOCK_TIME = 15 * 60 * 1000;
      if (user.failedLoginAttempt >= MAX_ATTEMPTS) {
        user.lockUntil = now + LOCK_TIME;
        user.failedLoginAttempt = 0;
      }
      await this.usersService.save(user);
      throw new UnauthorizedException('Invalid Credentials');
    }

    const tokens = await this.generateTokens(
      user.id,
      user.email,
      user.fullName,
    );
    return { user, ...tokens };
  }

  // ------------------ PASSWORD HASHING ------------------
  private async hashPassword(password: string): Promise<string> {
    const salt = randomBytes(16).toString('hex');
    const hash = (await scrypt(password, salt, 64)) as Buffer;
    return `${salt}.${hash.toString('hex')}`;
  }

  private async verifyPassword(
    password: string,
    storedHash: string,
  ): Promise<boolean> {
    const [salt, storedKey] = storedHash.split('.');
    const hashBuffer = Buffer.from(storedKey, 'hex');
    const derivedKey = (await scrypt(password, salt, 64)) as Buffer;

    // Compare using constant time to avoid timing attacks
    return timingSafeEqual(hashBuffer, derivedKey);
  }

  // ------------------ JWT TOKEN GENERATION ------------------
  private async generateTokens(
    userId: string,
    email: string,
    fullName: string,
  ) {
    const payload = { sub: userId, email, fullName };

    const accessToken = await this.jwt.signAsync(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: '15m',
    });

    const refreshToken = await this.jwt.signAsync(payload, {
      secret: process.env.JWT_REFRESH_SECRET,
      expiresIn: '7d',
    });

    return { accessToken, refreshToken };
  }
}
