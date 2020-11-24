import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { User } from '@app/user/entities/User';
import { CacheService } from '@app/cache/services/CacheService';

@Injectable()
export class UserRepo {
  private readonly cachePrefix = 'user-';

  constructor(
    @InjectRepository(User)
    private readonly baseUserRepository: Repository<User>,
    private readonly cacheService: CacheService,
  ) {}

  private getCacheKey(id: number): string {
    return `${this.cachePrefix}${id}`;
  }

  public async create(user: User): Promise<User> {
    const savedUser = await this.baseUserRepository.save(user);

    const cacheKey = this.getCacheKey(savedUser.id);

    await this.cacheService.set(cacheKey, savedUser);

    return savedUser;
  }

  public async update(user: User): Promise<User> {
    await this.baseUserRepository.save(user);

    const updatedUser = await this.baseUserRepository.findOneOrFail(user.id);

    const cacheKey = this.getCacheKey(updatedUser.id);

    await this.cacheService.set(cacheKey, updatedUser);

    return updatedUser;
  }

  public async findById(id: number): Promise<User | undefined> {
    const cacheKey = this.getCacheKey(id);

    const cachedUser = await this.cacheService.get<User>(cacheKey);

    if (cachedUser) {
      return cachedUser;
    }

    const user = await this.baseUserRepository.findOne(id);

    await this.cacheService.set(cacheKey, user);

    return user;
  }

  public async findAll(): Promise<User[]> {
    return this.baseUserRepository.find();
  }
}
