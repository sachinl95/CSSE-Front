import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Order } from '../../model/order';
import { PendingPaymentsService } from './pending-payments.service';
import { PaymentSharedService } from '../payment-shared.service';

@Component({
  selector: 'app-pending-payments',
  templateUrl: './pending-payments.component.html',
  styleUrls: ['./pending-payments.component.scss']
})
export class PendingPaymentsComponent implements OnInit {

  public orders: Order[];
  dataSource = new MatTableDataSource<Order>(this.orders);
  @ViewChild(MatSort) sort: MatSort;
  constructor(private pendingPaymentsService: PendingPaymentsService, private changeDetectorRefs: ChangeDetectorRef, private paymentSharedService: PaymentSharedService) {

  }
  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.pendingPaymentsService.getPendingPayments()
      .subscribe(
        (data: any) => {
          this.orders = data;
          console.log(this.orders);
          this.dataSource = new MatTableDataSource<Order>(this.orders);
          this.dataSource.sort = this.sort; // sort
          this.changeDetectorRefs.detectChanges();
          //console.log("dasrc:",this.dataSource);

        }
      );

  }

  displayedColumns: string[] = ['orderID', 'order_Date', 'amount', 'view', 'pay'];

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getRecord(row) {
    console.log(row);
    this.paymentSharedService.saveOrderID(row);
  }

  getRecord2(row) {
    this.paymentSharedService.saveOrder(row);
  }

}