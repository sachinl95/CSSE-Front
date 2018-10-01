import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { Routes, RouterModule } from '@angular/router';
import { DndModule } from 'ng2-dnd';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatTableModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatGridListModule } from '@angular/material';
import {
  MatToolbarModule,
  MatListModule,
  MatCardModule
} from '@angular/material';
export const ROUTES: Routes = [
  { path: '', component: EmployeesComponent },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    DndModule.forRoot(),
    FormsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule
  ],
  declarations: [EmployeesComponent]
})
export class EmployeesModule { }
