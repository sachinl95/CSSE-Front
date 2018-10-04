import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierComponent } from './supplier.component';
import { Routes, RouterModule } from '@angular/router';
import { DndModule } from 'ng2-dnd';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import {
    MatTableModule, MatFormFieldModule, MatInputModule,
    MatButtonModule, MatGridListModule, MatSelectModule, MatOptionModule,
    MatIconModule, MatCheckboxModule
} from '@angular/material';
import {
    MatToolbarModule,
    MatListModule,
    MatCardModule
} from '@angular/material';
export const ROUTES: Routes = [
    { path: '', component: SupplierComponent },
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
        MatGridListModule,
        MatSelectModule,
        MatOptionModule,
        MatIconModule,
        MatCheckboxModule,
        ReactiveFormsModule
    ],
    declarations: [SupplierComponent]
})
export class SupplierModule { }
