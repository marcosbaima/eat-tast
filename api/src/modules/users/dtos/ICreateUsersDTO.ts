
export default interface IcreateUserDTO{
  user_id?:string;
  name: string;
  email: string;
  groupsId:string;
  password: string;
  old_password?:string;
  powerUser:boolean;
}
