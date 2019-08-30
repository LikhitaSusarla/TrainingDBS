import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from  '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkWithHttpComponent } from './work-with-http/work-with-http.component';
import { from } from 'rxjs';
import { PromisesComponent } from './promises/promises.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CloseAccountComponent } from './close-account/close-account.component';
import {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    WorkWithHttpComponent,
    PromisesComponent,
    CreateAccountComponent,
    CloseAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
