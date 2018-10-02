import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Payment } from '../../models/payment';
import { SuccessfullPaymentsService } from './successfull-payments.service';

@Component({
  selector: 'app-successfull-payments',
  templateUrl: './successfull-payments.component.html',
  styleUrls: ['./successfull-payments.component.scss']
})
export class SuccessfullPaymentsComponent implements OnInit {

  public payments: Payment[];
  dataSource = new MatTableDataSource<Payment>(this.payments);
  @ViewChild(MatSort) sort: MatSort;
  constructor(private successfullPaymentsService:SuccessfullPaymentsService, private changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit() {
    this.refresh()
  }
  refresh() {
    this.successfullPaymentsService.getPaidPayments()
      .subscribe(
        (data: any) => {
            this.payments = data ;
            console.log(this.payments);
            this.dataSource = new MatTableDataSource<Payment>(this.payments);
            this.dataSource.sort = this.sort; // sort
            this.changeDetectorRefs.detectChanges();
            //console.log("dasrc:",this.dataSource);

        }
      );

  }

  displayedColumns: string[] = ['orderID', 'order_Date', 'amount', 'view'];

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
