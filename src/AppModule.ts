import { Module } from '@nestjs/common';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '@app/user/UserModule';
import { RedisModule } from 'nestjs-redis';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'example',
      password: 'example',
      database: 'example',
      synchronize: true,
      namingStrategy: new SnakeNamingStrategy(),
      entities: ["src/**/entities/*.ts"],
    }),
    RedisModule.register({
      host: 'localhost',
      port: 6379,
    }),
    UserModule,
  ],
})
export class AppModule {}
