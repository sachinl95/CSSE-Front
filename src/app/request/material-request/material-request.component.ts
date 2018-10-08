import { Component, OnInit } from '@angular/core';
import {Request} from '../../model/request';
import { NgForm } from '@angular/forms';
import {RequestServiceService} from './request-service.service';

@Component({
  selector: 'app-material-request',
  templateUrl: './material-request.component.html',
  styleUrls: ['./material-request.component.scss']
})
export class MaterialRequestComponent implements OnInit {

  request:Request;
  constructor(private requestService:RequestServiceService) { }

  ngOnInit() {
    this.request = new Request;
    
  }

  onSubmit(form:NgForm){
    if(form.valid){
      this.requestService.postRequest(this.request).subscribe(
        (data:any) => {
          alert(data.message);
          form.resetForm();
        }
      )
    }
  }
  
}
