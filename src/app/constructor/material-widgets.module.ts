import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { MaterialWidgetsRouterModule } from './material-widgets.router';

import * as hljs from 'highlight.js';
import { HighlightJsModule, HIGHLIGHT_JS } from 'angular-highlight-js';
import * as hljsTypescript from 'highlight.js/lib/languages/typescript';
import { SearchOrderComponent } from './search-order/search-order.component';
import {MatTableDataSource,MatFormFieldModule,MatTableModule} from '@angular/material';
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
    HighlightJsModule.forRoot({
      provide: HIGHLIGHT_JS,
      useFactory: highlightJsFactory,
      
    }),
    MaterialWidgetsRouterModule
  ],
  declarations: [
    SearchOrderComponent
    


    ],

  exports: [
    ]
      
})
export class MaterialWidgetsModule { }