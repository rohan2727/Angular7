import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpComponent } from './Emp/emp.component';

const routes: Routes = [
    { path: 'emp', component: EmpComponent },
    
];


@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: [],
})
export class AppRoutingModule { }
