import Group from '../infra/typeorm/models/Group'
import ICreateGroupDTO from '../dtos/ICreateGroupDTO'
export default interface ICreateGroupRepository{
  findById(id:string): Promise<Group | undefined> 
  findByType(type:string): Promise<Group | undefined> 
  //find(date:ICreatePlanRecurrenceDTO):Promise<Plans>;
  create(date:ICreateGroupDTO): Promise<Group>;
  save(groups:Group):Promise<Group>

  
}