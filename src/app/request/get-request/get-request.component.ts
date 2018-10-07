import { Component, OnInit } from '@angular/core';
import {Request} from '../../model/request';
import { MatTableDataSource } from '@angular/material'
import {GetRequestServiceService} from './get-request-service.service' ;

@Component({
  selector: 'app-get-request',
  templateUrl: './get-request.component.html',
  styleUrls: ['./get-request.component.scss']
})
export class GetRequestComponent implements OnInit {

  request:Request;
  constructor(private requestService:GetRequestServiceService) { }

  requests : Request[] = [];

  ngOnInit() {

    this.requests = [];

    this.requestService.getAllRequest().subscribe(
      (data:any) => {
        data.forEach(request => {
          let temp : Request
          temp ={
            _id:request._id,
            itemName:request.itemName,
            qty:request.qty,
            approved:request.approved,
            completed:request.completed
          }
          this.requests.push(temp);
        })
        this.dataSource.data = this.requests;
        console.log(data);
      }
    )

  }


  displayedColumns: string[] = ['itemName', 'qty','approved','completed'];
  dataSource = new MatTableDataSource(this.requests);

}
