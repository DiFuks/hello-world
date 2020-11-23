import { IsInt, IsOptional, IsPositive, IsString, Length, Max } from 'class-validator';

export class UserUpdateDto {
  @IsString()
  @Length(1, 255)
  @IsOptional()
  public name?: string;

  @IsInt()
  @IsPositive()
  @Max(100_000)
  @IsOptional()
  public balance?: number;
}
