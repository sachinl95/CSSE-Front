import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Order } from '../../model/order';
import { ViewOrderService } from './view-order.service';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.scss']
})
export class ViewOrderComponent implements OnInit {

  

  public orders: Order[];
  public items:any=[];
  dataSource = new MatTableDataSource<Order>(this.orders);
  @ViewChild(MatSort) sort: MatSort;
  constructor(private viewOrderService: ViewOrderService, private changeDetectorRefs: ChangeDetectorRef) {

  }
  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.viewOrderService.getOrders()
      .subscribe(
        (data: any) => {
            this.orders = data ;
            console.log(this.orders);
            this.dataSource = new MatTableDataSource<Order>(this.orders);
            this.dataSource.sort = this.sort; // sort
            this.changeDetectorRefs.detectChanges();
            //console.log("dasrc:",this.dataSource);

        }
      );

  }

  displayedColumns: string[] = ['item', 'category','quantity', 'amount'];

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
