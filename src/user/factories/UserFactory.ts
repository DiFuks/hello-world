import { UserCreateDto } from '@app/user/dto/UserCreateDto';
import { User } from '@app/user/entities/User';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserFactory {
  public createFromCreateDto(dto: UserCreateDto): User {
    const user = new User();

    user.name = dto.name;

    return user;
  }
}
