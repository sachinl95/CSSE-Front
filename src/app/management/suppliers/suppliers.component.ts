import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios'
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss']
})
export class SuppliersComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    suppliers = []
    axios.get('http://localhost:8093/suppliers').then(response => {
      response.data.forEach(supplier => {
        let tempSupplier: Supplier
        tempSupplier = {
          supplierId: supplier.supplierId,
          name: supplier.name,
          bankAccount: supplier.bankAccount,
          address: supplier.address,
          email: supplier.email,
          contactNo: supplier.contactNo,
          items: supplier.items,
          available: supplier.available,
          blacklisted: supplier.blacklisted
        }
        suppliers.push(tempSupplier)
        this.dataSource.data = suppliers
      });
    }).catch(error => {

    })

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

  goToAddSupplier() {
    this.router.navigate(['auth/management/supplier'])
  }

  goToModifySupplier(supplierId) {
    this.router.navigate(['auth/management/supplier/' + supplierId])
  }

  displayedColumns: String[] = ['supplierId', 'name', 'bankAccount', 'address', 'email', 'contactNo', 'items', 'available', 'blacklisted']
  dataSource = new MatTableDataSource(suppliers)

}

class Supplier {
  supplierId: String
  name: String
  bankAccount: String
  address: String
  email: String
  contactNo: String
  items: Array<String>
  available: Boolean
  blacklisted: Boolean
}

let suppliers: Supplier[] = []