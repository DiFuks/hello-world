import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({
  name: 'users',
})
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn('increment')
  public id!: number;

  @ApiProperty()
  @Column({
    type: 'varchar',
    length: 255,
    unique: true,
    nullable: false,
  })
  public name!: string;

  @ApiProperty()
  @Column({
    type: 'int',
    default: 0,
    nullable: false,
  })
  public balance!: number;
}
