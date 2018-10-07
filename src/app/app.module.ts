import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LazyLoadModule } from './lazy-load/lazy-load.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import {MatTableModule,MatFormFieldModule} from '@angular/material';

import { HttpClientModule }                                 from '@angular/common/http';
//import { PendingOrderComponent } from './pending-order/pending-order.component';
//import { RejectOrderComponent } from './reject-order/reject-order.component';
//import { ApprovedOrderComponent } from './approved-order/approved-order.component';
//import { MyNotificationComponent } from './my-notification/my-notification.component';
//import { OderSettingComponent } from './oder-setting/oder-setting.component'; 
//import { AddOrderComponent } from './add-order/add-order.component';



@NgModule({
  declarations: [

    AppComponent,

   // PendingOrderComponent,

    //RejectOrderComponent,

   // ApprovedOrderComponent,

   

    //OderSettingComponent,

    //AddOrderComponent,
  
  ],
  imports: [

    BrowserModule,
    HttpClientModule,
    LazyLoadModule,
    CoreModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule
  
  ],
  providers: [],

  bootstrap: [AppComponent]
  
})
export class AppModule { }
