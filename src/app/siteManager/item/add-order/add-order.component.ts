import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm } from '@angular/forms';
import { OrderServiceService } from '../../service/order-service.service';
import { ItemModel } from '../../../model/item';
import { MatTableDataSource, MatPaginator, MatSort}       from '@angular/material';
import {Order} from '../../../model/order';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent implements OnInit {

  orderForm:FormGroup;
  order:Order;
  item : ItemModel;

  nameList : string[] = [];
  

  constructor(private orderService:OrderServiceService,private fb: FormBuilder) { 

    this.orderForm = fb.group({  
      'items' : [null, Validators.required],  
      'quentity' : [null, Validators.required],  
      'orderDate' : [null, Validators.required],  
      'supplierName' : [null, Validators.required], 
    });
  }

  dataSource = new MatTableDataSource();

  ngOnInit() {

    this.item = new ItemModel;
    this.order = new Order;
    //this.order = new PostItemModel;
  
    this.orderService.getItem().subscribe(
      (data:any) => {
          const Items: Item[] = data.message;
          console.log(Items[1]);
          
          for(var i=0 ; i<Items.length ; i++){
              this.nameList.push(Items[i].itemName);
          }
      }
    )

  }


  onFormSubmit(form:NgForm)  {  
    
    if(this.orderForm.valid){
      this.orderService.postOrder(form).subscribe((data:any) => {
        console.log(data);
      })
    }
  }


}

 

export interface Item {
  id:string;
  itemName:string;
  categoryId:string;
  price:string;
  deliveryInformation:string;
 // isRestricedItem:string;
}



