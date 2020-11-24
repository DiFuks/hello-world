import { IsInt, IsOptional, IsPositive, IsString, Length, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserUpdateDto {
  @ApiProperty()
  @IsString()
  @Length(1, 255)
  @IsOptional()
  public name?: string;

  @ApiProperty()
  @IsInt()
  @IsPositive()
  @Max(100_000)
  @IsOptional()
  public balance?: number;
}
