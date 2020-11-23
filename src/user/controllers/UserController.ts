import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, UseGuards, UseInterceptors } from '@nestjs/common';

import { UserCreator } from '@app/user/services/UserCreator';
import { UserCreateDto } from '@app/user/dto/UserCreateDto';
import { User } from '@app/user/entities/User';
import { UserUpdater } from '@app/user/services/UserUpdater';
import { UserUpdateDto } from '@app/user/dto/UserUpdateDto';
import { AuthGuard } from '@app/user/guards/AuthGuard';
import { UserFinder } from '@app/user/services/UserFinder';
import { FormatResponse } from '@app/user/interceptors/FormatResponse';

@Controller('/user')
@UseGuards(new AuthGuard())
@UseInterceptors(new FormatResponse())
export class UserController {
  constructor(
    private readonly userCreator: UserCreator,
    private readonly userUpdater: UserUpdater,
    private readonly userFinder: UserFinder,
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

  @Get()
  public findAll(): Promise<User[]> {
    return this.userFinder.findAll();
  }
}
