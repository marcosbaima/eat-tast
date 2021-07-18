import {
  Entity,
  Column,
  PrimaryGeneratedColumn,ManyToOne,JoinColumn
} from 'typeorm';

import restaurant from './Restaurant'
@Entity('items')
class items {

  @PrimaryGeneratedColumn('uuid')
  id: string;

 
  @Column()
  title: string;

  @Column()
  description: string;
  
  @Column()
  price: string;

  @Column()
  thumbnail_path:string;

  @ManyToOne(()=>restaurant,(restaurant:any)=>restaurant.id)
  @JoinColumn({name:'restaurant_id' })
  @Column('uuid')
  restaurant_id:string;

}

export default items;