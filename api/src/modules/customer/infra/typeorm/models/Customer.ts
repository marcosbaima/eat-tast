import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
  } from 'typeorm';

  
  @Entity('customers')
  class Customers {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    name:string;
  
    @Column()
    email:string;
  
    
    @Column()
    password_hash: string;

  
    @Column()
    address: string;
  
    @Column()
    district: string;
  
  }
  
  export default Customers;