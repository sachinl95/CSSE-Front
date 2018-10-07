import { Component, OnInit } from '@angular/core';
import {OrderServiceService} from '../../service/order-service.service';
import { MatTableDataSource, MatPaginator, MatSort}       from '@angular/material';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {orderModel} from '../../../model/order';

@Component({
  selector: 'app-oder-setting',
  templateUrl: './oder-setting.component.html',
  styleUrls: ['./oder-setting.component.scss']
})
export class OderSettingComponent implements OnInit {

  order:orderModel;
  displayedColumns: string[] = ['Id', 'ItemName', 'CategoryId' , 'Price', 'deliveryInformation'];

  constructor(private orderervice:OrderServiceService) { }
  dataSource = new MatTableDataSource();

  ngOnInit() {

    this.order = new orderModel;
    this.orderervice.getAllOrders().subscribe(
      (data:any) => {
        console.log(data);
        const Orders : Order[] = data;
        this.dataSource = new MatTableDataSource(Orders);
      }
    )

  }

}

export interface Order {

}
