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
import SellerOwner100Pay from '@modules/owners/infra/typeorm/models/SellerOwner100Pay';
import SellerOwnerBranch from '@modules/branchs/infra/typeorm/models/SellerOwnerBranch';

//import { Exclude, Expose } from 'class-transformer';

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
  //

  // foreing key - user to sellerowner100pay
  @ManyToOne((type) => SellerOwner100Pay, (Users) => User, { eager: true })
  @JoinTable()
  owners: SellerOwner100Pay;

  @Column('uuid')
  ownersId: string;
  //

  @ManyToOne((type) => SellerOwnerBranch, (Users) => Users, { eager: true })
  @JoinTable()
  branchs: SellerOwnerBranch;

  @Column('uuid')
  branchsId: string;

  /*@Expose({name:'avatar_url'})
  getAvatarUrl():string | null {
    return this.avatar
      ? `${process.env.APP_API_URL}/files/${this.avatar}`
      : null;
  }*/
}

export default User;
