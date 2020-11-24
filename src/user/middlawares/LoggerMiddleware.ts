import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

export class LoggerMiddleware implements NestMiddleware {
  public use(req: Request, res: Response, next: NextFunction): void {
    console.log('New request has come', {
      extra: {
        request: {
          ip: req.ip,
          baseUrl: req.baseUrl,
          headers: req.headers,
          method: req.method,
          query: req.query,
          body: req.body,
        },
      },
    });

    next();
  }
}
