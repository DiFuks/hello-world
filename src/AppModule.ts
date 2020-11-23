import { Module } from '@nestjs/common';

import { AppService } from '@app/services/AppService';
import { AppController } from '@app/controllers/AppController';

@Module({
  providers: [AppService],
  controllers: [AppController],
  imports: [],
  exports: [],
})
export class AppModule {}
