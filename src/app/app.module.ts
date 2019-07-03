import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgBootstrapModule } from './ng-bootstrap/ng-bootstrap.module';
 
import { AppComponent } from './app.component';
import { EmpComponent } from './Emp/emp.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        EmpComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }