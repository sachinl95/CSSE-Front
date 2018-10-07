import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {constants} from '../../siteManager/url/urls'

@Injectable({
  providedIn: 'root'
})
export class RequestServiceService {

  constructor(private http:HttpClient) { }

  postRequest(request)  {
    return this.http.post(constants.HOME_URL+"request" , request);
  }

}
