import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import axios from 'axios'

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss']
})
export class PolicyComponent implements OnInit {
  policyId: String
  private sub: any
  title: String
  buttonText: String
  policy = {
    policyId: '',
    description: ''
  }
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.policyId = params['policyId']
    })

    if (this.policyId === undefined) {
      this.title = 'Add Business Policy'
      this.buttonText = 'Add Policy'
    } else {
      this.title = 'Update Business Policy: ' + this.policyId
      this.buttonText = 'Save Changes'
      axios.get('http://localhost:8093/business-policies/' + this.policyId).then(response => {
        this.policy.policyId = response.data.policyId
        this.policy.description = response.data.description
      }).catch(error => {
        this.router.navigate(['auth/management/policies'])
      })
    }
  }

  addOrUpdatePolicy() {
    let method = ''
    if (this.policyId === undefined) {
      method = 'POST'
    } else {
      method = 'PUT'
    }
    axios({
      url: 'http://localhost:8093/business-policies/',
      method: method,
      data: this.policy
    }).then(response => {
      if (response.status === 200) {
        alert('Policy ' + this.policyId + ' has been updated')
        this.router.navigate(['auth/management/policies'])
      } else if (response.status === 201) {
        alert('Policy has been added')
        this.router.navigate(['auth/management/policies'])
      }
    }).catch(error => {
      alert('An error occured\n' + error.response.data.message)
    })
  }

  removePolicy() {
    if (this.policyId !== undefined) {
      axios.delete('http://localhost:8093/business-policies/' + this.policyId).then(response => {
        alert('Policy has been removed')
        this.router.navigate(['auth/management/policies'])
      }).catch(error => {
        alert(error.response.message)
      })
    }
  }

  goBack() {
    this.router.navigate(['auth/management/policies'])
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

}
