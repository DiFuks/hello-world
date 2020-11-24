import { ApiProperty } from '@nestjs/swagger';

export class BaseResponse<Data = {}> {
  @ApiProperty()
  public code!: number;

  @ApiProperty()
  public message!: string;

  public payload!: Data;

  @ApiProperty()
  public stack?: string;
}
