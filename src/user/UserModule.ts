import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from '@app/user/entities/User';
import { UserCreator } from '@app/user/services/UserCreator';
import { UserFactory } from '@app/user/factories/UserFactory';
import { UserController } from '@app/user/controllers/UserController';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
  ],
  providers: [
    UserCreator,
    UserFactory,
  ],
  controllers: [
    UserController,
  ],
})
export class UserModule {}
