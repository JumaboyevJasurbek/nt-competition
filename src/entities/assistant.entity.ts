import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Groups } from './groups.entity';
import { Gender } from 'src/types';
import { Tasks } from './task.entity';

@Entity({ name: 'assistants' })
export class Assistant extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  password: string;

  @Column()
  age: number;

  @Column()
  position: string;

  @Column()
  username: string;

  @Column()
  tel_number: string;

  @Column()
  img: string;

  @Column({
    type: 'enum',
    enum: Gender,
    default: Gender.male,
    nullable: false,
  })
  gender: string;

  @OneToMany(() => Groups, (group) => group.assistant)
  groups: Groups[];

  @OneToMany(() => Tasks, (task) => task.assistant)
  task: Tasks[];
}
