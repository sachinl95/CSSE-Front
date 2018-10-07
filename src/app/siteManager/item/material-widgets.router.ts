import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetItemComponent } from './get-order/get-item.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ItemSettingComponent } from './item-setting/item-setting.component';
import { AddOrderComponent } from './add-order/add-order.component';
import {OderSettingComponent} from './oder-setting/oder-setting.component';
import {MyNotificationComponent} from'./my-notification/my-notification.component'
import{ApprovedOrderComponent} from './approved-order/approved-order.component';
import {RejectOrderComponent} from './reject-order/reject-order.component';
import {PendingOrderComponent} from './pending-order/pending-order.component';


const materialWidgetRoutes: Routes = [
    { path: 'get-item', component:  GetItemComponent},
    { path: 'add-item', component:  AddItemComponent},
    { path: 'item-setting', component:  ItemSettingComponent},
    { path: 'add-order', component:  AddOrderComponent},
    { path: 'order-setting', component:  OderSettingComponent},
    { path: 'my-notification', component:  MyNotificationComponent},
    { path: 'approved-order', component:  ApprovedOrderComponent},
    { path: 'reject-order', component:  RejectOrderComponent},
    { path: 'pending-order', component:  PendingOrderComponent},





    
    { path: '', redirectTo: '/get-item', pathMatch: 'full',},
    { path: '', redirectTo: '/add-item', pathMatch: 'full',},
    { path: '', redirectTo: '/item-setting', pathMatch: 'full',},
    { path: '', redirectTo: '/add-order', pathMatch: 'full',},
    { path: '', redirectTo: '/order-setting', pathMatch: 'full',},
    { path: '', redirectTo: '/my-notification', pathMatch: 'full',},
    { path: '', redirectTo: '/approved-order', pathMatch: 'full',},
    { path: '', redirectTo: '/reject-order', pathMatch: 'full',},
    { path: '', redirectTo: '/pending-order', pathMatch: 'full',},






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

