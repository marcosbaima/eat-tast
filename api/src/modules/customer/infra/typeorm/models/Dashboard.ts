import {
  Entity,
  Column,
  PrimaryGeneratedColumn,ManyToOne,JoinColumn
} from 'typeorm';

import restaurant from './Restaurant'
@Entity('dashboard')
class dashboard {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  balance: number;

  @Column()
  delivery_balance: number;
  
  @Column()
  total_orders: number;

  @Column("simple-array")
  top_items:string[];

  @ManyToOne(()=>restaurant,(restaurant:any)=>restaurant.id)
  @JoinColumn({name:'restaurant_id' })
  @Column('uuid')
  restaurant_id:string;

}

export default dashboard;