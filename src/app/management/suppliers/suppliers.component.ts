import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss']
})
export class SuppliersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

class Supplier {
  supplierId: { required: true, type: String },
    name: { required: true, type: String },
    bankAccount: { required: true, type: String
    address: String
    email: String
    contactNo: String
    items: [{ required: false, type: String }],
    available: Boolean
    blacklisted: Boolean
}