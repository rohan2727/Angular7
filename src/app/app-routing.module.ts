import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgBootstrapModule } from './ng-bootstrap/ng-bootstrap.module';
import { EmpComponent } from './Emp/emp.component';

const routes: Routes = [
	{ path: 'emp', component: EmpComponent },
    { path: 'ng-bootstrap', loadChildren: './ng-bootstrap/NgBootstrapModule.module#NgBootstrapModule'  }
    
];


@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: [],
})
export class AppRoutingModule { }
