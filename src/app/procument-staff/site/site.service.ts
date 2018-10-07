import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { constant } from '../../_helpers/appConstatnts';

@Injectable()
export class SiteService {

  constructor(private http:HttpClient) { }

  postSite(site){
    return this.http.post(constant.HOME_URL+"site",site);
  }
}
