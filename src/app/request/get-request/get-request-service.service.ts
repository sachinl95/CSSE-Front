import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {constants} from '../../siteManager/url/urls';

@Injectable({
  providedIn: 'root'
})
export class GetRequestServiceService {

  constructor(private http:HttpClient) { }

  getAllRequest(){
    return this.http.get(constants.HOME_URL+"request");
  }
}
