import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeModule } from './employee/employee.module';
@NgModule({
declarations: [
AppComponent
],
imports: [
BrowserModule,
FormsModule,
AppRoutingModule,
HttpModule,
EmployeeModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }