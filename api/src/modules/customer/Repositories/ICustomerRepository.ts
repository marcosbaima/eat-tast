import customer from '../infra/typeorm/models/Customer'
import ICreateCustomerDTO from '../dtos/ICreateCustomerDTO'
export default interface ICustomerRepository{
    findById(id:string): Promise<customer | undefined>
    findByEmail(email:string): Promise<customer | undefined>
    findByMarket(marketplaceId:string): Promise<customer | undefined>
  //  find(date:ICreateSubscriptionDTO):Promise<subscription>;
  create(date:ICreateCustomerDTO): Promise<customer>;
  save(apiowners:customer):Promise<customer>
}
