import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { Punto1Component } from './Components/punto1/punto1.component';
import { Punto2Component } from './Components/punto2/punto2.component';
import {DataTableModule} from "angular2-datatable";
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import{Angular2FontawesomeModule} from "angular2-fontawesome/angular2-fontawesome";
import { FormsModule }   from '@angular/forms';
import { LoginComponent } from './Components/login/login.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Punto1Component,
    Punto2Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DataTableModule,
    Angular2FontawesomeModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
