export default interface ICreateOrderDTO {
    customer_id: string;
    restaurant_id:string;
    items:string[];
    subtotal:string;
    fees:string;
    delivery_price: string;
    total:string;
}