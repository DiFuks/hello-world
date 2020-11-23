import { Body, Controller, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';

import { UserCreator } from '@app/user/services/UserCreator';
import { UserCreateDto } from '@app/user/dto/UserCreateDto';
import { User } from '@app/user/entities/User';
import { UserUpdater } from '@app/user/services/UserUpdater';
import { UserUpdateDto } from '@app/user/dto/UserUpdateDto';

@Controller('/user')
export class UserController {
  constructor(
    private readonly userCreator: UserCreator,
    private readonly userUpdater: UserUpdater,
  ) {}

  @Post()
  public create(@Body() dto: UserCreateDto): Promise<User> {
    return this.userCreator.create(dto);
  }

  @Patch(':id')
  public update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UserUpdateDto,
  ): Promise<User> {
    return this.userUpdater.update(id, dto);
  }
}
