import { Module } from '@nestjs/common';
import { CacheService } from '@app/cache/services/CacheService';

@Module({
  providers: [CacheService],
  exports: [CacheService],
})
export class CacheModule {}
