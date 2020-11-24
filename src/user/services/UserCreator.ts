import { Injectable } from '@nestjs/common';
import { User } from '@app/user/entities/User';
import { UserCreateDto } from '@app/user/dto/UserCreateDto';
import { UserFactory } from '@app/user/factories/UserFactory';
import { UserRepo } from '@app/user/repositories/UserRepo';

@Injectable()
export class UserCreator {
  constructor(
    private readonly userRepo: UserRepo,
    private readonly userFactory: UserFactory,
  ) {}

  public create(dto: UserCreateDto): Promise<User> {
    const user = this.userFactory.createFromCreateDto(dto);

    return this.userRepo.create(user);
  }
}
