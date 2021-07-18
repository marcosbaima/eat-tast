import {
  Entity,
  Column,
  PrimaryGeneratedColumn,ManyToOne,JoinColumn
} from 'typeorm';

import restaurant from './Restaurant';
import customer from './Customer';
@Entity('orders')
class orders {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  items: string;

  @Column()
  subtotal: number;
  
  @Column()
  fees: number;

  @Column()
  delivery_price:number;

  @Column()
  total:number;

  @ManyToOne(()=>customer,(customer:any)=>customer.id)
  @JoinColumn({name:'customer_id' })
  @Column('uuid')
  customer_id:string;

  @ManyToOne(()=>restaurant,(restaurant:any)=>restaurant.id)
  @JoinColumn({name:'restaurant_id' })
  @Column('uuid')
  restaurant_id:string;

}

export default orders;