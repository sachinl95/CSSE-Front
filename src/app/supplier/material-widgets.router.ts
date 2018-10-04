import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { SearchOrderComponent } from './search-order/search-order.component';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { GetSupplierComponent } from './get-supplier/get-supplier.component';
import { SupplierSettingComponent } from './supplier-setting/supplier-setting.component';

const materialWidgetRoutes: Routes = [
  	//{ path: 'searchOrder', component:  SearchOrderComponent},
    { path: 'add-supplier', component: AddSupplierComponent},
    { path: '', redirectTo: '/add-supplier', pathMatch: 'full',},
    { path: 'get-supplier', component: GetSupplierComponent},
    { path: '', redirectTo: '/get-supplier', pathMatch: 'full',},
    { path: 'supplier-setting', component: SupplierSettingComponent},
    { path: '', redirectTo: '/supplier-setting', pathMatch: 'full',}
    //{ path: '', redirectTo: '/searchOrder', pathMatch: 'full',}
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