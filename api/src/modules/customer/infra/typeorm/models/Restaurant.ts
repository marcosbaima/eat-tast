import {
  Entity,
  Column,
  PrimaryGeneratedColumn,ManyToOne,JoinColumn
} from 'typeorm';


@Entity('restaurant')
class restaurant {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  active: boolean;

  @Column()
  name: string;
  
  @Column()
  password: string;

  @Column()
  password_hash:string;

  @Column()
  restaurant_name:string;

  @Column()
  restaurant_address:string;

  @Column()
  restaurant_city:string;

  @Column()
  culinary:string;

  @Column()
  description:string;

  @Column()
  delivery_price:number;

  @Column()
  logo_path:string;

  @Column()
  banner_path:string;

}

export default restaurant;