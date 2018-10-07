export class orderModel{
    _id:string;
    sequential:string;
    items:string;
    orderStatus:string;
    quentity:number;
    isDraftPurchaseOrder:Boolean;
    onHold:Boolean;
    orderDate:Date;
    supplierName:string;
}