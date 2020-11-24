import {
  Body,
  Controller,
  Get, HttpStatus,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post, UseFilters,
  UseInterceptors,
} from '@nestjs/common';

import { UserCreator } from '@app/user/services/UserCreator';
import { UserCreateDto } from '@app/user/dto/UserCreateDto';
import { User } from '@app/user/entities/User';
import { UserUpdater } from '@app/user/services/UserUpdater';
import { UserUpdateDto } from '@app/user/dto/UserUpdateDto';
import { AuthGuard } from '@app/user/guards/AuthGuard';
import { UserFinder } from '@app/user/services/UserFinder';
import { FormatResponse } from '@app/user/interceptors/FormatResponse';
import { HttpExceptionFilter } from '@app/user/exceptionFilters/HttpExceptionFilter';
import { ApiCreatedResponse, ApiExtraModels, ApiOkResponse } from '@nestjs/swagger';
import { ApiBaseResponse } from '@app/user/decorators/ApiBaseResponse';
import { BaseResponse } from '@app/user/dto/BaseResponse';

@Controller('/user')
// @UseGuards(new AuthGuard())
@UseInterceptors(new FormatResponse())
@UseFilters(new HttpExceptionFilter())
@ApiExtraModels(BaseResponse)
export class UserController {
  constructor(
    private readonly userCreator: UserCreator,
    private readonly userUpdater: UserUpdater,
    private readonly userFinder: UserFinder,
  ) {}

  @Post()
  @ApiBaseResponse(User, { status: HttpStatus.CREATED })
  public create(@Body() dto: UserCreateDto): Promise<User> {
    return this.userCreator.create(dto);
  }

  @Patch(':id')
  @ApiBaseResponse(User, { status: HttpStatus.CREATED })
  public update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UserUpdateDto,
  ): Promise<User> {
    return this.userUpdater.update(id, dto);
  }

  @Get()
  @ApiBaseResponse(User, { status: HttpStatus.OK, isArray: true })
  public findAll(): Promise<User[]> {
    return this.userFinder.findAll();
  }

  @Get(':id')
  @ApiBaseResponse(User, { status: HttpStatus.OK })
  public async getById(@Param('id', ParseIntPipe) id: number): Promise<User> {
    const user = await this.userFinder.findById(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}
