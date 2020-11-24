import { Injectable } from '@nestjs/common';

import { User } from '@app/user/entities/User';
import { UserFactory } from '@app/user/factories/UserFactory';
import { UserUpdateDto } from '@app/user/dto/UserUpdateDto';
import { UserRepo } from '@app/user/repositories/UserRepo';

@Injectable()
export class UserUpdater {
  constructor(
    private readonly userRepo: UserRepo,
    private readonly userFactory: UserFactory,
  ) {}

  public update(id: number, dto: UserUpdateDto): Promise<User> {
    const user = this.userFactory.createFromUpdateDto(id, dto);

    return this.userRepo.update(user);
  }
}
