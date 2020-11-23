import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { User } from '@app/user/entities/User';
import { UserFactory } from '@app/user/factories/UserFactory';
import { UserUpdateDto } from '@app/user/dto/UserUpdateDto';

@Injectable()
export class UserUpdater {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly userFactory: UserFactory,
  ) {}

  public update(id: number, dto: UserUpdateDto): Promise<User> {
    const user = this.userFactory.createFromUpdateDto(id, dto);

    return this.userRepository.save(user);
  }
}
