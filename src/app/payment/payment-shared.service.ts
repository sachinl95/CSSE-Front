import { Injectable } from '@angular/core';
import { constant } from '../_helpers/appConstatnts';
import { HttpClient } from '@angular/common/http';
import { Order } from '../model/order';

@Injectable()
export class PaymentSharedService {

  orderID:String;
  order:Order;
  constructor(private httpclient: HttpClient) { }
  saveOrderID(ID){
    this.orderID=ID;
  }
  saveOrder(order){
    this.order=order;
  }


  getOrderDetailsByID(){
    return this.httpclient.get(constant.HOME_URL + 'orders/'+this.orderID);
  }

  
}
