import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LazyLoadModule } from './lazy-load/lazy-load.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http'
import {HttpClientModule} from '@angular/common/http';
import { CoreModule } from './core/core.module';
// import { SearchOrderComponent } from './constructor/search-order/search-order.component';
import {MatTableModule,MatFormFieldModule} from '@angular/material';
//import { SupplierSettingComponent } from './supplier-setting/supplier-setting.component';
//import { GetSupplierComponent } from './get-supplier/get-supplier.component';
//import { AddSupplierComponent } from './supplier/add-supplier/add-supplier.component';


@NgModule({
  declarations: [
    AppComponent,
    //SupplierSettingComponent,
    //GetSupplierComponent,
    //AddSupplierComponent,

    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    LazyLoadModule,
    CoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
