import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import User from '@modules/users/infra/typeorm/models/Users';

@Entity('group')
class Group {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @Column()
  type: string;

  // //////// Acessos dos grupos //////////
  @Column('bool')
  cm1: string;

  @Column('bool')
  cm1u: string;

  @Column('bool')
  cm1r1: string;

  @Column('bool')
  cm1r2: string;

  @Column('bool')
  cm1e: string;

  @Column('bool')
  cm2: string;

  @Column('bool')
  cm2c: string;

  @Column('bool')
  cm2e: string;

  @Column('bool')
  cm2r: string;

  @Column('bool')
  cm2u: string;

  @Column('bool')
  cm2d: string;

  @Column('bool')
  cm3: string;

  @Column('bool')
  cm3a1: string;

  @Column('bool')
  cm3a2: string;

  @Column('bool')
  cm3a3: string;

  @Column('bool')
  cm4: string;

  @Column('bool')
  cm4a1: string;

  @Column('bool')
  cm4a2: string;

  @Column('bool')
  cm4a3: string;

  @Column('bool')
  cm5: string;

  @Column('bool')
  cm5a1: string;

  @Column('bool')
  cm5a1c: string;

  @Column('bool')
  cm5a1e: string;

  @Column('bool')
  cm5a1r: string;

  @Column('bool')
  cm5a1u: string;



  @Column('bool')
  cm5a1d:string;
  @Column('bool')
    cm5a2:string;

    @Column('bool')
    cm5a2c:string;

    @Column('bool')
    cm5a2e:string;

    @Column('bool')
    cm5a2r:string;

    @Column('bool')
    cm5a2u:string;

    @Column('bool')
    cm5a2d:string;

    @Column('bool')
    cm5a3:string;

    @Column('bool')
    cm6:string;

    @Column('bool')
    cm6a1:string;

    @Column('bool')
    cm6a1u:string;

    @Column('bool')
    cm6a2:string;

    @Column('bool')
    cm6a2c:string;

    @Column('bool')
    cm6a2u:string;

    @Column('bool')
    cm6a3:string;

    @Column('bool')
    cm6a3u1:string;

    @Column('bool')
    cm6a3u2:string;

    @Column('bool')
    cm6a4:string;

    @Column('bool')
    cm6a4c1:string;

    @Column('bool')
    cm6a4c2:string;

    @Column('bool')
    cm6a4c3:string;

    @Column('bool')
    cm6a5:string;


  @Column('bool')
  cm6a5u1:string;

  @Column('bool')
    cm6a5u2:string;

    @Column('bool')
    cm7:string;

    @Column('bool')
    cm7a1:string;

    @Column('bool')
    cm7a2:string;

  // //////////////////////////////////////

  // / foreing key - group users ////

  @OneToMany((type) => User, (groups) => Group)
  User: User[];

  // ///////////////////////////////

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  static type: any;
}

export default Group;
