import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Payment } from '../../models/payment';

@Component({
    selector: 'app-pending-payments',
    templateUrl: './pending-payments.component.html',
    styleUrls: ['./pending-payments.component.scss']
})
export class PendingPaymentsComponent implements OnInit {

  public payments:Payment[];
  dataSource = new MatTableDataSource<Payment>(this.payments);
    ngOnInit() {
      this.dataSource = new MatTableDataSource<Payment>(this.payments);
    }

    displayedColumns: string[] = ['position', 'orderID', 'order_Date', 'amount', 'action'];

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

}