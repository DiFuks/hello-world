import { IsDefined, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserCreateDto {
  @ApiProperty()
  @IsString()
  @Length(1, 255)
  @IsDefined()
  public name!: string;
}
