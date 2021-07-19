import Restaurant from '../infra/typeorm/models/Restaurant';
import ICreateRestaurantDTO from '../dtos/ICreateRestaurantDTO';
export default interface IRestaurantRepository{
    findById(id:string): Promise<Restaurant | undefined>
    findByEmail(email:string): Promise<Restaurant | undefined>
    findByMarket(marketplaceId:string): Promise<Restaurant | undefined>
    delete(id:string):Promise<Restaurant | undefined>
  //  find(date:ICreateSubscriptionDTO):Promise<subscription>;
  create(date:ICreateRestaurantDTO): Promise<Restaurant>;
  save(apiowners:Restaurant):Promise<Restaurant>
}
