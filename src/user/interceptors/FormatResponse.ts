import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpStatus,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseResponse } from '@app/user/dto/BaseResponse';

@Injectable()
export class FormatResponse implements NestInterceptor {
  public intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    return next.handle().pipe(
      map(
        (payload): BaseResponse => ({
          code: HttpStatus.OK,
          message: '',
          payload: payload || {},
        }),
      ),
    );
  }
}
