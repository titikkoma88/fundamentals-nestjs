import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, any> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const code = context.switchToHttp().getResponse().statusCode
    return next.handle().pipe(
      map((data => ({
        statusCode: context.switchToHttp().getResponse().statusCode,
        message: code != 200 ? 'Error' : 'Success',
        data: data,
      }))
    ));
  }
}
