import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {constants} from '../url/urls';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private http:HttpClient) { }

  getItem(){
    return this.http.get(constants.HOME_URL+"items");
  }

  postOrder(order){
    return this.http.post(constants.HOME_URL+"orders",order);
  }

  getAllOrders(){
    return this.http.get(constants.HOME_URL+"orders");
  }

}
