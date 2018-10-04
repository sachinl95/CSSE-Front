import { NgModule }                                                   from '@angular/core';
import { CommonModule }                                               from '@angular/common';
import { MaterialWidgetsRouterModule }                                from './material-widgets.router';
import * as hljs                                                      from 'highlight.js';
import { HighlightJsModule, HIGHLIGHT_JS }                            from 'angular-highlight-js';
import * as hljsTypescript                                            from 'highlight.js/lib/languages/typescript';
//import { GetItemComponent }                                              from './get-order/get-item.component';
//import { AddItemComponent } from './add-item/add-item.component';
//import { ItemSettingComponent } from './item-setting/item-setting.component';
//import {AddOrderComponent} from './add-order/add-order.component';
import {} from '@angular/material/datepicker' 
import { MatPaginatorModule,MatSelectModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddSupplierComponent } from './add-supplier/add-supplier.component'

//import {OderSettingComponent} from './oder-setting/oder-setting.component';
import 
{ 
  MatTableModule,
  MatFormFieldModule, 
  MatInputModule, 
  MatToolbarModule, 
  MatListModule,
  MatCardModule,
  MatMenuModule,
  MatNativeDateModule

}                                                                     from '@angular/material';
import {CdkTableModule}                                               from '@angular/cdk/table';
//import {MatDatepicker} from '@angular/material/datepicker';
import { GetSupplierComponent } from './get-supplier/get-supplier.component';
import { SupplierSettingComponent } from './supplier-setting/supplier-setting.component';
 


export function highlightJsFactory(): any {
  hljs.registerLanguage('typescript', hljsTypescript);
  return hljs;
}

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    
    MatNativeDateModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatPaginatorModule,
    MatToolbarModule,
    CdkTableModule,
    MatListModule,
    MatTableModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    HighlightJsModule.forRoot({
      provide: HIGHLIGHT_JS,
      useFactory: highlightJsFactory,
    }),
    MaterialWidgetsRouterModule,
    MatTableModule
  ],

  declarations: [
    AddSupplierComponent,
    GetSupplierComponent,
    SupplierSettingComponent
    ],


  exports: [

    ]
      
})
export class MaterialWidgetsModule { }