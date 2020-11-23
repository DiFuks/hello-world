import { Controller, Get } from '@nestjs/common';

import { AppService } from '@app/services/AppService';

@Controller('/')
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {}

  @Get()
  public getHello(): string {
    return this.appService.getHello();
  }
}
