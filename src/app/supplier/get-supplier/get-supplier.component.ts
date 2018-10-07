import { Component, OnInit } from '@angular/core';
import {Supplier} from '../model/supplier';
import { MatTableDataSource } from '@angular/material'
import {SupplierServiceService} from '../service/supplier-service.service';

@Component({
  selector: 'app-get-supplier',
  templateUrl: './get-supplier.component.html',
  styleUrls: ['./get-supplier.component.scss']
})
export class GetSupplierComponent implements OnInit {

  supplier:Supplier;
  constructor(private supplierGetService : SupplierServiceService) { }

  suppliers : Supplier[] = [];

  ngOnInit() {

    this.suppliers = [];

    this.supplierGetService.getSupplier().subscribe(
      (data:any) => {
        console.log(data);

        data.forEach(supplier => {
          let temp : Supplier
          temp = {

            supplierName:supplier.supplierName,
            bankAccount:supplier.bankAccount,
            nic:supplier.nic,
            address:supplier.address,
            email:supplier.email,
            phone:supplier.phone,
            items:supplier.items
          }
          this.suppliers.push(temp);
        })
        this.dataSource.data = this.suppliers;

      }
    )
  }

  displayedColumns: string[] = ['supplierName', 'bankAccount','nic','address','email','phone','items'];
  dataSource = new MatTableDataSource(this.suppliers);

}
