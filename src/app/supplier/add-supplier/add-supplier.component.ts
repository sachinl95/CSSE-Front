import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Supplier} from '../model/supplier';
import {SupplierServiceService} from '../service/supplier-service.service';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.scss']
})
export class AddSupplierComponent implements OnInit {

  supplier:Supplier;
  constructor(private supplierService:SupplierServiceService) { }

  ngOnInit() {
    this.supplier = new Supplier;
  }

  register(form:NgForm){
     console.log(this.supplier);
    //if(form.valid){
      this.supplierService.addSupplier(this.supplier).subscribe(
        (data:any) => {
          console.log(data.message);
        }
      )
    //}
    // else{
    //   console.log(form.valid);
    // }
  }

}
