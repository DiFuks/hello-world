import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from '@app/user/entities/User';
import { UserCreator } from '@app/user/services/UserCreator';
import { UserFactory } from '@app/user/factories/UserFactory';
import { UserController } from '@app/user/controllers/UserController';
import { UserUpdater } from '@app/user/services/UserUpdater';
import { UserFinder } from '@app/user/services/UserFinder';
import { LoggerMiddleware } from '@app/user/middlewares/LoggerMiddleware';
import { UserRepo } from '@app/user/repositories/UserRepo';
import { CacheModule } from '@app/cache/CacheModule';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    CacheModule,
  ],
  providers: [
    UserCreator,
    UserFactory,
    UserUpdater,
    UserFinder,
    UserRepo,
  ],
  controllers: [
    UserController,
  ],
})
export class UserModule implements NestModule {
  public configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes(UserController);
  }
}
