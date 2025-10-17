/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Controller, Post, Res, Body, Get } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { LoginDto } from 'src/users/dto/user-login.dto';
import { RegisterDto } from 'src/users/dto/user-register.dto';
import { UserResponseDto } from 'src/users/dto/user-response.dto';
import { Serialize } from 'src/common/interceptors/transform.interceptor';
import { Throttle } from '@nestjs/throttler';

@Controller({ path: 'auth', version: '1' })
export class AuthController {
  constructor(private authService: AuthService) {}

  @Serialize(UserResponseDto)
  @Post('login')
  async login(
    @Body() dto: LoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const result = await this.authService.login(dto);
    res.cookie('accessToken', result.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });
    return { message: 'Logged in successfully', user: result.user };
  }

  @Serialize(UserResponseDto)
  @Post('register')
  async register(
    @Body() dto: RegisterDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const result = await this.authService.register(dto);

    // Set token in cookies (same as login)
    res.cookie('accessToken', result.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });

    return { message: 'Registered successfully', user: result.user };
  }
  @Get()
  @Throttle({ default: { limit: 3, ttl: 60000 } })
  getHello() {
    return { message: 'Hello world!' };
  }
}
