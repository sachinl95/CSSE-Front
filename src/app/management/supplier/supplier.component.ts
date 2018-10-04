import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { FormControl } from '@angular/forms';
import axios from 'axios'

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {
  supplierId: String
  sub: any
  title: String
  buttonText: String
  supplier = {
    supplierId: '',
    name: '',
    bankAccount: '',
    address: '',
    email: '',
    contactNo: '',
    items: [],
    available: null,
    blacklisted: null,
  }

  toppings = new FormControl();
  toppingList: string[] = [];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.supplierId = params['supplierId']
    })
    // axios.get('http://localhost:8093/items').then(response => { // TODO: Check URL and item.name/title
    //   response.data.forEach(item => {
    //     this.toppingList.push(item.itemName)
    //   });
    // }).catch(error => {
    //   console.log('Failed to get the items from the database')
    // })
    this.toppingList = ['Cement', 'Bricks', 'Sand']

    if (this.supplierId === undefined) {
      this.title = 'Add Supplier'
      this.buttonText = 'Add Supplier'
    } else {
      this.title = 'Update Supplier: ' + this.supplierId
      this.buttonText = 'Save Changes'
      axios.get('http://localhost:8093/suppliers/' + this.supplierId).then(response => {
        this.supplier.supplierId = response.data.supplierId
        this.supplier.name = response.data.name
        this.supplier.bankAccount = response.data.bankAccount
        this.supplier.items = response.data.items
        this.toppings.setValue(response.data.items)
        this.supplier.address = response.data.address
        this.supplier.email = response.data.email
        this.supplier.contactNo = response.data.contactNo
        this.supplier.available = response.data.available
        this.supplier.blacklisted = response.data.blacklisted
      }).catch(error => {
        this.router.navigate(['auth/management/suppliers'])
      })
    }
  }

  goBack() {
    this.router.navigate(['auth/management/suppliers'])
  }

  addOrUpdateSupplier() {
    let method = ''
    if (this.supplierId === undefined) {
      method = 'POST'
    } else {
      method = 'PUT'
    }
    this.supplier.items = this.toppings.value
    if (this.supplier.items === null) this.supplier.items = []
    if (this.supplier.available === null) this.supplier.available = false
    if (this.supplier.blacklisted === null) this.supplier.blacklisted = false
    axios({
      url: 'http://localhost:8093/suppliers/',
      method: method,
      data: this.supplier
    }).then(response => {
      if (response.status === 200) {
        alert('Supplier ' + this.supplierId + ' has been updated')
        this.router.navigate(['auth/management/suppliers'])
      } else if (response.status === 201) {
        alert('Supplier has been added')
        this.router.navigate(['auth/management/suppliers'])
      }
    }).catch(error => {
      alert('An error occured\n' + error.response.data.message)
    })
  }

  removeSupplier() {
    if (this.supplierId !== undefined) {
      axios.delete('http://localhost:8093/suppliers/' + this.supplierId).then(response => {
        alert('Supplier has been removed')
        this.router.navigate(['auth/management/suppliers'])
      }).catch(error => {
        alert(error.response.message)
      })
    }
  }

}
