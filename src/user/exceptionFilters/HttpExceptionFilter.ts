import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Response } from 'express';

import { BaseResponse } from '@app/user/dto/BaseResponse';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  public catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    const responseDto = new BaseResponse();

    responseDto.code = status;
    responseDto.message = exception.message;
    responseDto.stack = exception.stack;
    responseDto.payload = {};

    response
      .status(status)
      .json(responseDto);
  }
}
