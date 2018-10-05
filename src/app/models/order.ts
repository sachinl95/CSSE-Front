export class Order{
    _id:String;
    sequential:String;
    items:{
        catagory:String;
        itemName:String;
        quantity:String;
        amount:String;
    };
    orderStatus:String;
    orderDate:String  
}