
export default interface IcreateUserDTO{
  user_id?:string;
  name: string;
  email: string;
  password: string;
  old_password?:string;
  groupsId: string;
  ownersId: string;
  branchsId: string;
  powerUser:boolean;
}
