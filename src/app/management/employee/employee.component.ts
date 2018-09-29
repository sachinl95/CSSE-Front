import { Component, OnInit } from '@angular/core'
import {MatTableDataSource} from '@angular/material'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Make REST call and assign data to the employee object
    let object: rawEmployee[]
    object = [
      { id: 'EMP001', type: 'Constructor', firstName: 'Sameer', lastName: 'Basil', address: 'Colombo', email: 'smrbasil@gmail.com', phone: '0770695817'}
    ]
    this.formatAndAssign(object)
  }

  formatAndAssign(emp: rawEmployee[]) {
    emp.forEach(element => {
      // employee.push();
    });
  }

  displayedColumns: string[] = ['id', 'type', 'firstName', 'lastName']
  dataSource = new MatTableDataSource(employee)

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

}

class rawEmployee {
  id: String
  type: String
  firstName: String
  lastName: String
  address: String
  email: String
  phone: String
}

class Employee {
  id: String
  type: String
  name: String
  address: String
  email: String
  phone: String
}
let employee: Employee[] = []