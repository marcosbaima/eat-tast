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

    @Column('bool')
    cm8:string;

    @Column('bool')
    cm8a1:string;

    @Column('bool')
    cm8a2:string;

    @Column('bool')
    am1:string;
    @Column('bool')
    am1r1:string;
    @Column('bool')
    am1r2:string;
    @Column('bool')
    am1r3:string;
    @Column('bool')
    am1r4:string;
    @Column('bool')
    am1r5:string;
    @Column('bool')
    am1c1:string;
    @Column('bool')
    am1e:string;
    @Column('bool')
    am2:string;
    @Column('bool')
    @Column('bool')
    am2a1:string;
    @Column('bool')
    am2a1c:string;
    @Column('bool')
    am2a1te:string;
    @Column('bool')
    AM2A2:string;
    @Column('bool')
    AM2A2C:string;
    @Column('bool')
    AM2A2U:string;
    @Column('bool')
    AM2A2D:string;
    @Column('bool')
    AM2A3:string;
    @Column('bool')
    AM2A3U:string;
    @Column('bool')
    AM3:string;
    @Column('bool')
    AM3A1:string;
    @Column('bool')
    AM3A1C:string;
    @Column('bool')
    AM3A1R:string;
    @Column('bool')
    AM3A1E:string;
    @Column('bool')
    AM3A2:string;
    @Column('bool')
    AM3A2R:string;
    @Column('bool')
    AM3A2E:string;
    @Column('bool')
    AM4:string;
    @Column('bool')
    AM4A1:string;
    @Column('bool')
    AM4A1C:string;
    @Column('bool')
AM4A1E:string;
    @Column('bool')
AM4A1R:string;
    @Column('bool')
 AM4A2:string;
    @Column('bool')
AM4A2C:string;
    @Column('bool')
AM4A2U:string;
    @Column('bool')
AM4A2R:string;
    @Column('bool')
AM4A2E:string;

    @Column('bool')
   AM5:string;
    @Column('bool')
   AM6:string;
    @Column('bool')
 AM6U1:string;
    @Column('bool')
 AM6U2:string;
    @Column('bool')
 AM6U3:string;
    @Column('bool')
 AM6U4:string;




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
