import { Injectable } from '@angular/core';
import { constant } from '../../_helpers/appConstatnts';
import { Order } from '../../models/order';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ViewOrderService {

  order:Order;
  constructor(private httpclient: HttpClient) { 
  }

  getOrders()
  {
    return this.httpclient.get(constant.HOME_URL + 'orders')
  }
  
}
