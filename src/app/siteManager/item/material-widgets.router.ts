import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetItemComponent } from './get-item/get-item.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ItemSettingComponent } from './item-setting/item-setting.component';


const materialWidgetRoutes: Routes = [
    { path: 'get-item', component:  GetItemComponent},
    { path: 'add-item', component:  AddItemComponent},
    { path: 'item-setting', component:  ItemSettingComponent},
    
    

    { path: '', redirectTo: '/get-item', pathMatch: 'full',},
    { path: '', redirectTo: '/add-item', pathMatch: 'full',},
    { path: '', redirectTo: '/item-setting', pathMatch: 'full',}


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

