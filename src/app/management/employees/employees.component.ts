import { Component, OnInit } from '@angular/core'
import { MatTableDataSource } from '@angular/material'
import axios from 'axios'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Make REST call and assign data to the employee employeeArray
    employee = []
    let employeeArray: rawEmployee[]
    employeeArray = []
    axios.get('http://localhost:8093/employees').then(response => {
      response.data.forEach(tempEmp => {
        let temp: rawEmployee
        temp = {
          empId: tempEmp.empId, type: tempEmp.type, firstName: tempEmp.firstName, lastName: tempEmp.lastName,
          address: tempEmp.address, email: tempEmp.address, contactNo: tempEmp.contactNo
        }
        employeeArray.push(temp)
      })
      this.formatAndAssign(employeeArray)
      this.dataSource.data = employee
    })
  }

  formatAndAssign(emp: rawEmployee[]) {
    emp.forEach(element => {
      let name = element.firstName + ' ' + element.lastName
      let formattedEmp: Employee
      formattedEmp = {
        empId: element.empId, type: element.type, name: element.firstName + ' ' + element.lastName,
        address: element.address, email: element.email, contactNo: element.contactNo
      }
      employee.push(formattedEmp);
    });
  }

  displayedColumns: string[] = ['empId', 'type', 'name', 'address', 'email', 'contactNo']
  dataSource = new MatTableDataSource(employee)

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }
}

class rawEmployee {
  empId: String
  type: String
  firstName: String
  lastName: String
  address: String
  email: String
  contactNo: String
}

class Employee {
  empId: String
  type: String
  name: String
  address: String
  email: String
  contactNo: String
}
let employee: Employee[] = []