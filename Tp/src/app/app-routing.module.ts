import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Punto1Component} from './Components/punto1/punto1.component';
import {Punto2Component} from './Components/punto2/punto2.component';
<<<<<<< HEAD
import {HomeComponent} from './Components/home/home.component';
const routes: Routes = [
  {path: 'punto1', component:Punto1Component},
  {path: 'punto2',component:HomeComponent}
=======
import {LoginComponent} from './Components/login/login.component';
const routes: Routes = [
  {path: 'punto1', component:Punto1Component},
  {path: 'punto2',component:Punto2Component},
  {path: 'login',component:LoginComponent}
>>>>>>> afd72dc27e5244b774d698027108603d8078111d
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
