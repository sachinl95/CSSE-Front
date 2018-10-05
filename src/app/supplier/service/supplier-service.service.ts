import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {constants} from '../URL/urls';

@Injectable({
  providedIn: 'root'
})
export class SupplierServiceService {

  constructor(private http:HttpClient) { }

  addSupplier(suppiervisor){
      return this.http.post(constants.HOME_URL+"suppliers",suppiervisor);
  }



}
