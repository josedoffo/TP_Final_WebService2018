import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Punto1Component} from './Components/punto1/punto1.component';
import {Punto2Component} from './Components/punto2/punto2.component';
const routes: Routes = [
  {path: 'punto1', component:Punto1Component},
  {path: 'punto2',component:Punto2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
