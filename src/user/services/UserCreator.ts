import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '@app/user/entities/User';
import { UserCreateDto } from '@app/user/dto/UserCreateDto';
import { UserFactory } from '@app/user/factories/UserFactory';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserCreator {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly userFactory: UserFactory,
  ) {}

  public create(dto: UserCreateDto): Promise<User> {
    const user = this.userFactory.createFromCreateDto(dto);

    return this.userRepository.save(user);
  }
}
