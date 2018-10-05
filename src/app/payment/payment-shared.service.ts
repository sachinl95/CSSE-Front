import { Injectable } from '@angular/core';
import { constant } from '../_helpers/appConstatnts';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PaymentSharedService {

  orderID:String;
  constructor(private httpclient: HttpClient) { }
  saveOrderID(ID){
    this.orderID=ID;
  }

  getOrderDetailsByID(){
    return this.httpclient.get(constant.HOME_URL + 'orders/'+this.orderID);
  }

  
}
