import { UserCreateDto } from '@app/user/dto/UserCreateDto';
import { User } from '@app/user/entities/User';
import { Injectable } from '@nestjs/common';
import { UserUpdateDto } from '@app/user/dto/UserUpdateDto';

@Injectable()
export class UserFactory {
  public createFromCreateDto(dto: UserCreateDto): User {
    const user = new User();

    user.name = dto.name;

    return user;
  }

  public createFromUpdateDto(id: number, dto: UserUpdateDto): User {
    const user = new User();

    user.id = id;

    if (dto.name) {
      user.name = dto.name;
    }

    if (dto.balance) {
      user.balance = dto.balance;
    }

    return user;
  }
}
