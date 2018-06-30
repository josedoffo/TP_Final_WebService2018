import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { Punto1Component } from './Components/punto1/punto1.component';
import { Punto2Component } from './Components/punto2/punto2.component';
import {DataTableModule} from "angular2-datatable";
import{Angular2FontawesomeModule} from "angular2-fontawesome/angular2-fontawesome";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Punto1Component,
    Punto2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTableModule,
    Angular2FontawesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
