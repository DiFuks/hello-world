import { IsDefined, IsString, Length } from 'class-validator';

export class UserCreateDto {
  @IsString()
  @Length(1, 255)
  @IsDefined()
  public name!: string;
}
