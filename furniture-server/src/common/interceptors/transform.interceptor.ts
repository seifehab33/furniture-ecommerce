import {
  NestInterceptor,
  CallHandler,
  ExecutionContext,
  UseInterceptors,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Observable, map } from 'rxjs';

interface ClassConstructor {
  new (...args: any[]): object;
}

export function Serialize(dto: ClassConstructor) {
  return UseInterceptors(new TransformInterceptor(dto));
}

export class TransformInterceptor implements NestInterceptor {
  constructor(private dto: any) {}

  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    return handler.handle().pipe(
      map((data: any) => {
        // if data has 'user' key — only transform that
        if (data && data.user) {
          const transformedUser = plainToInstance(this.dto, data.user, {
            excludeExtraneousValues: true,
          });
          return {
            ...data,
            user: transformedUser,
          };
        }

        // if data is just an object itself — transform directly
        const transformedData = plainToInstance(this.dto, data, {
          excludeExtraneousValues: true,
        });

        return {
          message: 'Operation successful',
          data: transformedData,
        };
      }),
    );
  }
}
