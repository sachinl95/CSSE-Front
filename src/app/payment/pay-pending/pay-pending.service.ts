import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { constant } from '../../_helpers/appConstatnts';

@Injectable({
  providedIn: 'root'
})
export class PayPendingService {

  constructor(private httpclient: HttpClient) { 
  }

  getSuppliers()
  {
    return this.httpclient.get(constant.HOME_URL + 'suppliers')
  }
  updateOrder(orderId){
    return this.httpclient.put(constant.HOME_URL + 'orders/',orderId);
  }
  makePayment(payment){
    return this.httpclient.post(constant.HOME_URL + 'payments',payment);
  }
}
