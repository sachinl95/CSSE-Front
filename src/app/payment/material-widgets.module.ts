import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { MaterialWidgetsRouterModule } from './material-widgets.router';

import * as hljs from 'highlight.js';
import { HighlightJsModule, HIGHLIGHT_JS } from 'angular-highlight-js';
import * as hljsTypescript from 'highlight.js/lib/languages/typescript';
import { ManageApprovalComponent } from './manage-approval/manage-approval.component';
import { PayPendingComponent } from './pay-pending/pay-pending.component';
import { PendingPaymentsComponent } from './pending-payments/pending-payments.component';
import { SuccessfullPaymentsComponent } from './successfull-payments/successfull-payments.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import {MatTableDataSource,MatFormFieldModule,MatTableModule, MatButtonModule, MatOptionModule, MatSelectModule} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';



export function highlightJsFactory(): any {
  hljs.registerLanguage('typescript', hljsTypescript);
  return hljs;
}

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    CdkTableModule,
    MatTableModule,
    MatOptionModule,
    MatSelectModule,
    HighlightJsModule.forRoot({
      provide: HIGHLIGHT_JS,
      useFactory: highlightJsFactory,

      
    }),
    MaterialWidgetsRouterModule,
    MatButtonModule
  ],
  declarations: [
    ManageApprovalComponent,
    PayPendingComponent,
    PendingPaymentsComponent,
    SuccessfullPaymentsComponent,
    ViewOrderComponent
    


    ],

  exports: [
    ]
      
})
export class MaterialWidgetsModule { }