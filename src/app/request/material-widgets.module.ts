import { NgModule }                                                   from '@angular/core';
import { CommonModule }                                               from '@angular/common';
import { MaterialWidgetsRouterModule }                                from './material-widgets.router';
import * as hljs                                                      from 'highlight.js';
import { HighlightJsModule, HIGHLIGHT_JS }                            from 'angular-highlight-js';
import * as hljsTypescript                                            from 'highlight.js/lib/languages/typescript';
import {}                                                             from '@angular/material/datepicker' 
import {GetRequestComponent} from './get-request/get-request.component';
import 
{ 

  MatPaginatorModule,MatSelectModule, MatIconModule, MatGridTile,
  MatButtonModule, MatGridListModule, MatOptionModule,

} from '@angular/material';

import {FormsModule, ReactiveFormsModule }                            from '@angular/forms';
import {MaterialRequestComponent}                                     from './material-request/material-request.component';

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
    MaterialRequestComponent,
    GetRequestComponent
    ],


  exports: [

    ]
      
})
export class MaterialWidgetsModule { }