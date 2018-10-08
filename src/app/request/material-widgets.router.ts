import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MaterialRequestComponent} from './material-request/material-request.component';
import {GetRequestComponent} from './get-request/get-request.component'



const materialWidgetRoutes: Routes = [
   
    { path: 'material-request', component:  MaterialRequestComponent},
    { path: 'get-request', component:  GetRequestComponent},




    { path: '', redirectTo: '/material-request', pathMatch: 'full',},
    { path: '', redirectTo: '/get-request', pathMatch: 'full',},

    
];

@NgModule({
  imports: [
    RouterModule.forChild(materialWidgetRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MaterialWidgetsRouterModule {}

