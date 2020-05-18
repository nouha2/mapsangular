import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule ,
    AgmCoreModule.forRoot({
    apiKey:'AIzaSyAQqpNML7B0nu0yBtzvXhVMgtz4neSU-EE'  ,
    })
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
