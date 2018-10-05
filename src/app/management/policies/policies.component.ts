import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material'
import { Router } from '@angular/router'
import axios from 'axios'

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.scss']
})
export class PoliciesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    policies = []
    axios.get('http://localhost:8093/business-policies').then(response => {
      response.data.forEach(policy => {
        let temp: Policy
        temp = {
          policyId: policy.policyId,
          description: policy.description
        }
        policies.push(temp)
      })
      this.dataSource.data = policies
    }).catch(error => {

    })
  }

  displayedColumns: string[] = ['policyId', 'description']
  dataSource = new MatTableDataSource(policies)

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

  goToAddPolicy() {
    this.router.navigate(['auth/management/policy'])
  }

  goToModifyPolicy(policyId) {
    this.router.navigate(['auth/management/policy/' + policyId])
  }
}

class Policy {
  policyId: String
  description: String
}

let policies: Policy[] = []