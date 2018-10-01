import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Payment } from '../../models/payment';
import { PendingPaymentsService } from './pending-payments.service';

@Component({
  selector: 'app-pending-payments',
  templateUrl: './pending-payments.component.html',
  styleUrls: ['./pending-payments.component.scss']
})
export class PendingPaymentsComponent implements OnInit {

  public payments: Payment[];
  dataSource = new MatTableDataSource<Payment>(this.payments);
  @ViewChild(MatSort) sort: MatSort;
  constructor(private pendingPaymentsService: PendingPaymentsService, private changeDetectorRefs: ChangeDetectorRef) {

  }
  ngOnInit() {
    this.refresh();
  }

  refresh() {
    // this.pendingPaymentsService.getPendingPayments().subscribe((data:any)=>{
    //   this.payments=(data.Result);
    //   console.log(this.payments);
    //   this.dataSource = new MatTableDataSource<Payment>(this.payments);
    //   this.dataSource.sort = this.sort; // sort
    //   this.changeDetectorRefs.detectChanges();
    // })
    this.pendingPaymentsService.getPendingPayments()
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

  displayedColumns: string[] = ['orderID', 'order_Date', 'amount', 'action'];

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}