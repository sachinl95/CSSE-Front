import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-pending-payments',
  templateUrl: './pending-payments.component.html',
  styleUrls: ['./pending-payments.component.scss']
})
export class PendingPaymentsComponent {

  displayedColumns: string[] = ['position','orderID', 'order_Date', 'amount', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
export interface PeriodicElement {
  orderID: string;
  order_Date: String;
  amount: number;
  position: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position:1, orderID: 'O001', order_Date: '2018/09/30',amount:15000},
];