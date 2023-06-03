import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';

const routes: Routes = [
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  {path: 'employess', component:EmployeesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
