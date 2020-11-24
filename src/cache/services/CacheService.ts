import { RedisService } from 'nestjs-redis';
import * as Redis from 'ioredis';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CacheService {
  private readonly client: Redis.Redis;

  constructor(
    private readonly redisService: RedisService,
  ) {
    this.client = this.redisService.getClient();
  }

  public set<Value>(key: string, value: Value) {
    return this.client.set(key, JSON.stringify(value));
  }

  public async get<Value>(key: string): Promise<Value | undefined> {
    const data = await this.client.get(key);

    if (!data) {
      return;
    }

    const parsedData = JSON.parse(data);

    console.log(`Get data from redis with key ${key}:`, parsedData);

    return parsedData;
  }
}
