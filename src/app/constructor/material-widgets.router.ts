import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchOrderComponent } from './search-order/search-order.component';


const materialWidgetRoutes: Routes = [
  	{ path: 'searchOrder', component:  SearchOrderComponent},

    { path: '', redirectTo: '/searchOrder', pathMatch: 'full',}
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