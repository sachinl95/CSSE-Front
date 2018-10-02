import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { constant } from '../../_helpers/appConstatnts';
import { Observable } from 'rxjs';
import { Payment } from '../../models/payment';
import 'rxjs/add/operator/catch';

@Injectable()
export class SuccessfullPaymentsService {

  payment:Payment;
  constructor(private httpclient: HttpClient) { 
  }

  getPaidPayments()
  {
    return this.httpclient.get(constant.HOME_URL + 'payments/paid')
  }
}
