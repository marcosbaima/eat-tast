import Order from '../infra/typeorm/models/Order'
import ICreateOrderDTO from '../dtos/ICreateOrderDTO'
export default interface IOrderRepository{
    findById(id:string): Promise<Order | undefined>
    findByEmail(email:string): Promise<Order | undefined>
    findByMarket(marketplaceId:string): Promise<Order | undefined>
    delete(id:string):Promise<Order | undefined>
  //  find(date:ICreateSubscriptionDTO):Promise<subscription>;
  create(date:ICreateOrderDTO): Promise<Order>;
  save(apiowners:Order):Promise<Order>
}
