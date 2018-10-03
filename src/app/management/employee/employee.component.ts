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
    title: String
    buttonText: String
    employee = {
        empId: '',
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
            this.title = 'Add Employee'
            this.buttonText = 'Add Employee'
        } else {
            this.title = 'Update Employee: ' + this.empId
            this.buttonText = 'Save Changes'
            axios.get('http://localhost:8093/employees/' + this.empId).then(response => {
                this.employee.empId = response.data.empId
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
        let method = ''
        if (this.empId === undefined) {
            method = 'POST'
        } else {
            method = 'PUT'
        }
        axios({
            url: 'http://localhost:8093/employees/',
            method: method,
            data: this.employee
        }).then(response => {
            if (response.status === 200 || response.status === 201) {
                alert('Changes have bee saved' + response.status)
            }
        })
    }

    ngOnDestroy() {
        this.sub.unsubscribe()
    }

}