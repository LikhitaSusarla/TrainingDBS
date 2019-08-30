import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { WitheventsComponent } from './with-events/with-events.component';
import { RegistrationComponent } from './registration/registration.component';
import { IfcompComponent } from './if/if.component';
import { ForcompComponent } from './for-comp/for-comp.component';
import { PipeComponent } from './pipe/pipe.component';
import { RoutesModule } from './routes.module';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { MessagingCompComponent } from './messaging-comp/messaging-comp.component';
import {SampleModule} from './sample/sample.module'

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    WitheventsComponent,
    RegistrationComponent,
    IfcompComponent,
    ForcompComponent,
    PipeComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    MessagingCompComponent
  ],
  imports: [
    BrowserModule,FormsModule, RoutesModule,SampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
