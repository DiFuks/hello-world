import { Body, Controller, Post } from '@nestjs/common';

import { UserCreator } from '@app/user/services/UserCreator';
import { UserCreateDto } from '@app/user/dto/UserCreateDto';
import { User } from '@app/user/entities/User';

@Controller('/user')
export class UserController {
  constructor(
    private readonly userCreator: UserCreator,
  ) {}

  @Post()
  public create(@Body() dto: UserCreateDto): Promise<User> {
    return this.userCreator.create(dto);
  }
}
