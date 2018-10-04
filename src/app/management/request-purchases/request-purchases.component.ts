import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { MatTableDataSource } from '@angular/material'
import axios from 'axios'

@Component({
  selector: 'app-request-purchases',
  templateUrl: './request-purchases.component.html',
  styleUrls: ['./request-purchases.component.scss']
})
export class RequestPurchasesComponent implements OnInit {

  selectedRequest: Request = {
    requestId: '',
    approved: false
  }

  constructor(private router: Router) { }

  ngOnInit() {
    // axios.get('').then(response => {
    //   response.data.forEach(request => {
    //     if (request.aprroved === false) {
    //       let temp: Request
    //       temp = { requestId: request.requestId, approved: true }
    //       requests.push(temp)
    //     }
    //   })
    //   this.dataSource.data = requests
    // }).catch(error => {

    // })
    requests = [
      { requestId: 'qweq', approved: true },
      { requestId: 'asdf', approved: true },
      { requestId: 'asdf', approved: true },
      { requestId: 'asdf', approved: true }
    ]
    this.dataSource.data = requests
  }

  goToRequestPurchase() {
    this.router.navigate(['auth/management/request-purchases'])
  }

  displayedColumns: string[] = ['requestId']
  dataSource = new MatTableDataSource(requests)

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

  selectRequest(request: Request) {
    this.selectedRequest = request
  }
}

class Request {
  requestId: String
  approved: Boolean
}

let requests: Request[] = []