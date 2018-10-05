import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { MatTableDataSource } from '@angular/material'
import axios from 'axios'

@Component({
  selector: 'app-approved-requests',
  templateUrl: './approved-requests.component.html',
  styleUrls: ['./approved-requests.component.scss']
})
export class ApprovedRequestsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    // axios.get('').then(response => {
    //   response.data.forEach(request => {
    //     if (request.aprroved === true) {
    //       let temp: ApprovedRequest
    //       temp = { requestId: request.requestId, approved: true }
    //       approvedRequests.push(temp)
    //     }
    //   })
    //   this.dataSource.data = approvedRequests
    // }).catch(error => {

    // })
    approvedRequests= [
      {requestId: 'qweq', approved: true},
      {requestId: 'asdf', approved: true},
      {requestId: 'asdf', approved: true},
      {requestId: 'asdf', approved: true}
    ]
    this.dataSource.data = approvedRequests
  }

  goToRequestPurchase() {
    this.router.navigate(['auth/management/request-purchases'])
  }

  displayedColumns: string[] = ['requestId']
  dataSource = new MatTableDataSource(approvedRequests)

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }
}

class ApprovedRequest {
  requestId: String
  approved: Boolean
}

let approvedRequests: ApprovedRequest[] = []