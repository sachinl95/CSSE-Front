import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { DashboardCrmComponent } from '../dashboard-crm/dashboard-crm.component';

export const appRoutes: Routes = [{
    path: '', component: AuthComponent, children: [
        { path: 'dashboard', component: DashboardCrmComponent },
        { path: 'constructor', loadChildren: '../constructor/material-widgets.module#MaterialWidgetsModule' },
        { path: 'payment', loadChildren: '../payment/material-widgets.module#MaterialWidgetsModule' },
        { path: 'management/employees', loadChildren: '../management/employees/employees.module#EmployeesModule' },
        { path: 'management/employee', loadChildren: '../management/employee/employee.module#EmployeeModule' },
        { path: 'management/employee/:empId', loadChildren: '../management/employee/employee.module#EmployeeModule' },
        { path: 'management/suppliers', loadChildren: '../management/suppliers/suppliers.module#SuppliersModule' },
        { path: 'management/supplier', loadChildren: '../management/supplier/supplier.module#SupplierModule' },
        { path: 'management/supplier/:supplierId', loadChildren: '../management/supplier/supplier.module#SupplierModule' },
        { path: 'management/policies', loadChildren: '../management/policies/policies.module#PoliciesModule' },
        { path: 'management/policy', loadChildren: '../management/policy/policy.module#PolicyModule' },
        { path: 'management/policy/:policyId', loadChildren: '../management/policy/policy.module#PolicyModule' },
        { path: 'management/approved-requests', loadChildren: '../management/approved-requests/approved-requests.module#ApprovedRequestsModule' },
        { path: 'management/request-purchases', loadChildren: '../management/request-purchases/request-purchases.module#RequestPurchasesModule' },
        { path: 'siteManager', loadChildren: '../siteManager/item/material-widgets.module#MaterialWidgetsModule' },
    ]
}];
