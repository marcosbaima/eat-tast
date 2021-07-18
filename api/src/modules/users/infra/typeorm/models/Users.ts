import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinTable,
  ManyToOne,
} from 'typeorm';
import Group from '@modules/groups/infra/typeorm/models/Group';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  //@Exclude()
  password: string;

  @Column()
  avatar: string;

  @Column()
  IsActive: boolean;

  @Column()
  powerUser: boolean;

  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // foreing key - user to groups
  @ManyToOne((type) => Group, (Users) => User, { eager: true })
  @JoinTable()
  groups: Group;

  @Column('uuid')
  groupsId: string;

}

export default User;
