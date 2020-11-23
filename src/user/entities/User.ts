import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'users',
})
export class User {
  @PrimaryGeneratedColumn('increment')
  public id!: number;

  @Column({
    type: 'varchar',
    length: 255,
    unique: true,
    nullable: false,
  })
  public name!: string;

  @Column({
    type: 'int',
    default: 0,
    nullable: false,
  })
  public balance!: number;
}
