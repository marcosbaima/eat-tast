import menuRest from '../infra/typeorm/models/Restaurant'
import IExcludeMenuDTO from '../dtos/IExcludeMenuDTO'
export default interface IExcludeMenuRepository{
    findById(id:string): Promise<menuRest | undefined>
    findByEmail(email:string): Promise<menuRest | undefined>
    findByMarket(marketplaceId:string): Promise<menuRest | undefined>
    delete(id:string): Promise<menuRest | undefined>
  //  find(date:ICreateSubscriptionDTO):Promise<subscription>;
  create(date:IExcludeMenuDTO): Promise<menuRest>;
  save(apiowners:menuRest):Promise<menuRest>
}
