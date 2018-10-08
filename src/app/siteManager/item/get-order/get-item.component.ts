import { Component, OnInit } from '@angular/core';
import { orderModel } from '../../../model/order';
import { MatTableDataSource } from '@angular/material'
import { OrderServiceService } from '../../service/order-service.service'

@Component({
  selector: 'app-get-item',
  templateUrl: './get-item.component.html',
  styleUrls: ['./get-item.component.scss']
})
export class GetItemComponent implements OnInit {

  order: orderModel;
  constructor(private orderService: OrderServiceService) { }

  orders: orderModel[] = []

  ngOnInit() {
    this.orders = []
    this.orderService.getAllOrders().subscribe(
      (data: any) => {
        console.log(data);
        data.forEach(order => {
          let temp: orderModel
          temp = {
            _id: order._id,
            sequential: order.sequential,
            items: order.items,
            orderStatus: order.orderStatus,
            quentity: order.quentity,
            isDraftPurchaseOrder: order.isDraftPurchaseOrder,
            onHold: order.onHold,
            orderDate: order.orderDate,
            supplierName: order.supplierName
          }
          this.orders.push(temp)
        })
        this.dataSource.data = this.orders
      }

    )

  }

  displayedColumns: string[] = ['sequential', 'items','orderDate']
  dataSource = new MatTableDataSource(this.orders)


}