export default interface ICreateRestaurantDTO{
    name:string;
    email:string;
    password_hash?:string;
    description?:string;
    restaurant_name:string;
    restaurant_address:string;
    restaurant_city:string;
    culinary:string;
    delivery_price:number;
    logo_path:string;
    banner_path:string;
}