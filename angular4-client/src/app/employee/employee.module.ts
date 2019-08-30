import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
{path: 'api/employees', component: EmployeeListComponent},
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
exports: [RouterModule]
})
export class EmployeeModule { }

