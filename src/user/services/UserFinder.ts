import { Injectable } from '@nestjs/common';
import { User } from '@app/user/entities/User';
import { UserRepo } from '@app/user/repositories/UserRepo';

@Injectable()
export class UserFinder {
  constructor(
    private readonly userRepo: UserRepo,
  ) {}

  public findAll(): Promise<User[]> {
    return this.userRepo.findAll();
  }

  public findById(id: number): Promise<User | undefined> {
    return this.userRepo.findById(id);
  }
}
