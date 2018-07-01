import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Punto1Component} from './Components/punto1/punto1.component';
import {Punto2Component} from './Components/punto2/punto2.component';
import {HomeComponent} from './Components/home/home.component';
const routes: Routes = [
  {path: 'punto1', component:Punto1Component},
  {path: 'punto2',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
