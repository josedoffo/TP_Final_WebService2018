import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { Punto1Component } from './Components/punto1/punto1.component';
import { Punto2Component } from './Components/punto2/punto2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Punto1Component,
    Punto2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
