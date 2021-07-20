export default interface ICreateCustomerDTO{
  
    name:string;             
    email:string;
    password_hash?:any;
    address:string;
    district:string;
}