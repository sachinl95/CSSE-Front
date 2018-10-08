import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { MatTableDataSource } from '@angular/material'
import axios from 'axios'

@Component({
  selector: 'app-approve-requests',
  templateUrl: './approve-requests.component.html',
  styleUrls: ['./approve-requests.component.scss']
})
export class ApprovedRequestsComponent implements OnInit {

  approved: String
  constructor(private router: Router) { }

  ngOnInit() {
    // approvedRequests = []
    // unapprovedRequests = []
    // axios.get('').then(response => {
    //   response.data.forEach(request => {
    //     if (request.approved === false) {
    //       let temp: Request
    //       temp = {
    //         requestId: request._id,
    //         itemName: request.itemName,
    //         qty: request.request,
    //         approved: request.approved,
    //         completed: request.approved
    //       }
    //       unapprovedRequests.push(temp)
    //     } else {
    //       let temp: Request
    //       temp = {
    //         requestId: request._id,
    //         itemName: request.itemName,
    //         qty: request.request,
    //         approved: request.approved,
    //         completed: request.approved
    //       }
    //       approvedRequests.push(temp)
    //     }
    //   })
    //   this.dataSource.data = unapprovedRequests
    // }).catch(error => {

    // })
    unapprovedRequests = [
      { requestId: 'qweqsdfgsdgsdg', itemName: 'Cement', qty: 5, approved: false, completed: false },
      { requestId: 'qweq', itemName: 'Cement', qty: 5, approved: false, completed: false },
      { requestId: 'qweq', itemName: 'Cementsdfgsdfgsdfg', qty: 5, approved: false, completed: false },
      { requestId: 'qweq', itemName: 'Cement', qty: 5, approved: false, completed: false },
    ]
    approvedRequests = [
      { requestId: 'kldg', itemName: 'Bricks', qty: 5, approved: false, completed: false },
    ]
    this.dataSource.data = unapprovedRequests
  }

  goToRequestPurchase() {
    this.router.navigate(['auth/management/request-purchases'])
  }

  displayedColumns: string[] = ['requestId', 'itemName', 'qty', 'approve']
  dataSource = new MatTableDataSource(unapprovedRequests)

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

  refresh() {
    if (this.approved === 'true') {
      console.log('true')
      this.dataSource.data = approvedRequests
      this.displayedColumns = ['requestId', 'itemName', 'qty']
    }
    else {
      console.log('false')
      this.dataSource.data = unapprovedRequests
      this.displayedColumns = ['requestId', 'itemName', 'qty', 'approve']
    }
  }

  approve(request) {
    console.log(request)
    // axios.put('').then(response => {
    //   alert('The material request has been approved')
    //   this.ngOnInit()
    // }).catch(error => {
    //   alert('Error occured')
    // })
  }
}

class Request {
  requestId: String
  itemName: String
  qty: Number
  approved: Boolean
  completed: Boolean
}

let unapprovedRequests: Request[] = []
let approvedRequests: Request[] = []