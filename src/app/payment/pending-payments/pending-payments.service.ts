import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { constant } from '../../_helpers/appConstatnts';

@Injectable()
export class PendingPaymentsService {

  constructor(private httpclient: HttpClient) { 
  }

  getPendingPayments()
  {
    return this.httpclient.get(constant.HOME_URL + "/api/Tasks/GetTasks/");
  }
}
