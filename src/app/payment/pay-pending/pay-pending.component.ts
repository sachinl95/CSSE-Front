import { Component, OnInit } from '@angular/core';
import { PaymentSharedService } from '../payment-shared.service';
import { PayPendingService } from './pay-pending.service';
import { Supplier } from '../../models/supplier';
import { Order } from '../../model/order';
import { Payment } from '../../models/payment';

@Component({
  selector: 'app-pay-pending',
  templateUrl: './pay-pending.component.html',
  styleUrls: ['./pay-pending.component.scss']
})
export class PayPendingComponent implements OnInit {

  orderID: String;
  Orders: Order;
  payment: Payment;
  public suppliers: Supplier[];
  constructor(private paymentSharedService: PaymentSharedService, private payPendingService: PayPendingService) { }
  banks: Bank[] = [
    { value: '1', viewValue: '805004371' },
    { value: '2', viewValue: '500124756' },
    { value: '3', viewValue: '235003214' }
  ];

  ngOnInit() {
    this.GetSuppliers();
    this.payment = new Payment;
    this.orderID = this.paymentSharedService.orderID;
    this.Orders = this.paymentSharedService.order;
    this.payment.orderId=this.Orders.orderID;
    this.payment.supplierName="sameer basil";
    this.payment.date=Date.now();
    this.payment.bankAccountNumber="805004371";
    this.payment.status=true;   
    this.payment.amount=12500;
  }

  GetSuppliers() {
    this.payPendingService.getSuppliers()
      .subscribe(
        (data: any) => {
          debugger;
          if (data.Code == 0) {
            this.suppliers = data.Result;
            console.log(this.suppliers);
          }
          else if (data.Code == 1) {
            //   this.toasterService.Error(data.Message);
          }
          else {
            //  this.toasterService.Warning(data.Message);
          }
          console.log(data);
        }
      );
  }
  onSubmit() {
    this.payPendingService.updateOrder(this.orderID);
    this.payPendingService.makePayment(this.payment);
    alert("Payment made successfully");
  }

}

export interface Bank {
  value: string;
  viewValue: string;
}
