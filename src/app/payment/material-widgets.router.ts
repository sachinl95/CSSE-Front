import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageApprovalComponent } from './manage-approval/manage-approval.component';
import { PayPendingComponent } from './pay-pending/pay-pending.component';
import { PendingPaymentsComponent } from './pending-payments/pending-payments.component';
import { SuccessfullPaymentsComponent } from './successfull-payments/successfull-payments.component';
import { ViewOrderComponent } from './view-order/view-order.component';

const materialWidgetRoutes: Routes = [
    { path: 'manageApproval', component:  ManageApprovalComponent},
    { path: 'payPending', component:  PayPendingComponent},
    { path: 'pendingPayments', component:  PendingPaymentsComponent},
    { path: 'sucessfullPayments', component:  SuccessfullPaymentsComponent},
    { path: 'viewOrders', component:  ViewOrderComponent},

    { path: '', redirectTo: '/pendingPayments', pathMatch: 'full',}
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