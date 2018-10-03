import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import axios from 'axios'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  empId: String
  private sub: any
  employee = {
    type: '',
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    contactNo: ''
  }
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.empId = params['empId']
    })

    if (this.empId === undefined) {

    } else {
      axios.get('http://localhost:8093/employees/' + this.empId).then(response => {
        this.employee.type = response.data.type
        this.employee.firstName = response.data.firstName
        this.employee.lastName = response.data.lastName
        this.employee.address = response.data.address
        this.employee.email = response.data.email
        this.employee.contactNo = response.data.contactNo
      })
    }
  }

  addOrUpdateEmployee() {
    axios.put('http://localhost:8093/employees', this.employee).then(response => {
      alert(response.data.message)
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

}