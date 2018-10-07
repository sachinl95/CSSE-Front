import { NgModule }                                                   from '@angular/core';
import { CommonModule }                                               from '@angular/common';
import { MaterialWidgetsRouterModule }                                from './material-widgets.router';
import * as hljs                                                      from 'highlight.js';
import { HighlightJsModule, HIGHLIGHT_JS }                            from 'angular-highlight-js';
import * as hljsTypescript                                            from 'highlight.js/lib/languages/typescript';
import { GetItemComponent }                                              from './get-order/get-item.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ItemSettingComponent } from './item-setting/item-setting.component';
import {AddOrderComponent} from './add-order/add-order.component';
import {} from '@angular/material/datepicker' 
import { MatPaginatorModule,MatSelectModule, MatIconModule, MatGridTile,
  MatButtonModule, MatGridListModule, MatOptionModule,
} from '@angular/material';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {OderSettingComponent} from './oder-setting/oder-setting.component';
import {MyNotificationComponent} from './my-notification/my-notification.component';
import {ApprovedOrderComponent} from './approved-order/approved-order.component';
import {RejectOrderComponent} from './reject-order/reject-order.component';
import {PendingOrderComponent} from './pending-order/pending-order.component';
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
    MatTableModule,
    MatIconModule,
    MatButtonModule, MatGridListModule, MatOptionModule
  ],

  declarations: [
    GetItemComponent,
    AddItemComponent,
    ItemSettingComponent,
    AddOrderComponent,
    OderSettingComponent,
    MyNotificationComponent,
    ApprovedOrderComponent,
    RejectOrderComponent,
    PendingOrderComponent
    
    ],


  exports: [

    ]
      
})
export class MaterialWidgetsModule { }