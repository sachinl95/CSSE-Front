import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { MatTableDataSource } from '@angular/material'
import axios from 'axios'

@Component({
  selector: 'app-request-purchases',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class RequestPurchasesComponent implements OnInit {

  toggle: String
  requestType: Boolean

  constructor(private router: Router) { }

  ngOnInit() {
    orders = []
    requests = []
    this.requestType = true
    // axios.get('').then(response => {
    //   response.data.forEach(request => {
    //     if (request.approved === true) {
    //       let temp: Request
    //       temp = {
    //         requestId: request._id,
    //         itemName: request.itemName,
    //         qty: request.request,
    //         approved: request.approved,
    //         completed: request.approved
    //       }
    //       requests.push(temp)
    //     }
    //   })
    //   this.requestsDataSource.data = requests
    // }).catch(error => {

    // })
    axios.get('http://localhost:8093/orders').then(response => {
      response.data.forEach(order => {
        let temp: Order
        temp = {
          orderId: order.orderId,
          itemName: order.itemName,
          requestId: order.requestId,
          quantity: order.quantity,
          unitPrice: order.unitPrice,
          orderDate: order.orderDate
        }
        orders.push(temp)
        this.ordersDataSource.data = orders
      })
    }).catch(error => {

    })
    requests = [
      { requestId: 'qweq', itemName: "Cement", qty: 5, completed: false, approved: true },
      { requestId: 'asdf', itemName: "Bricks", qty: 5, completed: false, approved: true },
      { requestId: 'qwrmteq', itemName: "Sand", qty: 5, completed: false, approved: true },
    ]
    this.requestsDataSource.data = requests
  }

  createOrder(request) {
  }

  requestDisplayedColumns: string[] = ['requestId', 'itemName', 'qty', 'createOrder']
  orderDisplayedColumns: string[] = ['orderId', 'orderItemName', 'orderQty', 'unitPrice', 'date']
  requestsDataSource = new MatTableDataSource(requests)
  ordersDataSource = new MatTableDataSource(orders)

  applyFilter(filterValue: string) {
    this.requestsDataSource.filter = filterValue.trim().toLowerCase()
    this.ordersDataSource.filter = filterValue.trim().toLowerCase()
  }

  refresh() {
    if (this.toggle === 'true') {
      this.requestType = false
    } else {
      this.requestType = true
    }
  }
}

class Request {
  requestId: String
  itemName: String
  qty: Number
  approved: Boolean
  completed: Boolean
}

class Order {
  orderId: String
  itemName: String
  requestId: String
  quantity: Number
  unitPrice: Number
  orderDate: Date
}

let requests: Request[] = []
let orders: Order[] = []