import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Response } from 'express';

import { IResponse } from '@app/user/dto/IResponse';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  public catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    const responseDto: IResponse = {
      code: status,
      message: exception.message,
      stack: exception.stack,
      payload: {},
    }

    response
      .status(status)
      .json(responseDto);
  }
}
