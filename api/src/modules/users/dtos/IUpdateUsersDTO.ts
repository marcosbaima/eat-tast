
export default interface IUpdateUserDTO{
  user_id?:string;
  name: string;
  email: string;
  groupsId: string;
  //ownersId: string;
 // branchsId: string;
  powerUser:boolean;
}
