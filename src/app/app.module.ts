import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LazyLoadModule } from './lazy-load/lazy-load.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
// import { SearchOrderComponent } from './constructor/search-order/search-order.component';
import { MatTableModule, MatFormFieldModule, MatButtonModule, MatSelect, MatSelectModule, MatOptionModule } from '@angular/material';
import { ViewPendingOrdersComponent } from './supplier/view-pending-orders/view-pending-orders.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PendingPaymentsService } from './payment/pending-payments/pending-payments.service';
import { SuccessfullPaymentsComponent } from './payment/successfull-payments/successfull-payments.component';
import { SuccessfullPaymentsService } from './payment/successfull-payments/successfull-payments.service';
import { PaymentSharedService } from './payment/payment-shared.service';
import { ViewOrderService } from './payment/view-order/view-order.service';


@NgModule({
  declarations: [
    AppComponent,
    ViewPendingOrdersComponent
    
    
  ],
  imports: [
    BrowserModule,
    LazyLoadModule,
    CoreModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatButtonModule,
    HttpModule,
    HttpClientModule,
    MatSelectModule,
    MatOptionModule
  ],
  providers: [PendingPaymentsService,
    SuccessfullPaymentsService,
    PaymentSharedService,
    ViewOrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
