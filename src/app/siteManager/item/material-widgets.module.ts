import { NgModule }                                                   from '@angular/core';
import { CommonModule }                                               from '@angular/common';
import { MaterialWidgetsRouterModule }                                from './material-widgets.router';
import * as hljs                                                      from 'highlight.js';
import { HighlightJsModule, HIGHLIGHT_JS }                            from 'angular-highlight-js';
import * as hljsTypescript                                            from 'highlight.js/lib/languages/typescript';
import { GetItemComponent }                                              from './get-item/get-item.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ItemSettingComponent } from './item-setting/item-setting.component';
//import { OrderComponent }                                             from './order/order.component';
import { MatPaginatorModule,MatSelectModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import 
{ 
  MatTableModule,
  MatFormFieldModule, 
  MatInputModule, 
  MatToolbarModule, 
  MatListModule,
  MatCardModule,
  MatMenuModule
}                                                                     from '@angular/material';
import {CdkTableModule}                                               from '@angular/cdk/table';




export function highlightJsFactory(): any {
  hljs.registerLanguage('typescript', hljsTypescript);
  return hljs;
}

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
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
    GetItemComponent,
    AddItemComponent,
    ItemSettingComponent
    ],


  exports: [

    ]
      
})
export class MaterialWidgetsModule { }