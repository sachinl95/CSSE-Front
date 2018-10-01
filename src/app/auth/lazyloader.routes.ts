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
        { path: 'management/employee/:empId', loadChildren: '../management/employee/employee.module#EmployeeModule' }
    ]
}];
