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
<<<<<<< HEAD
import { LoginComponent } from './Components/login/login.component';
import { AuthenticationService } from './services/authentication.service';


=======
<<<<<<< HEAD
import {SlideshowModule} from 'ng-simple-slideshow';
import { HomeComponent } from './Components/home/home.component';

=======
import { LoginComponent } from './Components/login/login.component'
>>>>>>> afd72dc27e5244b774d698027108603d8078111d
>>>>>>> 6a831d05fa9304cdcb666b9a174c0043e3c4e8c6
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Punto1Component,
    Punto2Component,
<<<<<<< HEAD
    HomeComponent,
=======
    LoginComponent
>>>>>>> afd72dc27e5244b774d698027108603d8078111d
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DataTableModule,
    Angular2FontawesomeModule,
    HttpClientModule,
    HttpModule,
    SlideshowModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
