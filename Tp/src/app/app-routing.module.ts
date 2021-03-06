import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Punto1Component} from './Components/punto1/punto1.component';
import {Punto2Component} from './Components/punto2/punto2.component';
import {HomeComponent} from './Components/home/home.component';
import {LoginComponent} from './Components/login/login.component';
import {NovedadesComponent} from './Components/novedades/novedades.component';
import {ReservaComponent} from './Components/reserva/reserva.component';
const routes: Routes = [
  {path: 'punto1', component:Punto1Component},
  {path: 'punto2',component:Punto2Component},
  {path: 'login',component:LoginComponent},
  {path: 'home',component:HomeComponent},
  {path: 'reservas',component:ReservaComponent},
  {path: 'novedades',component:NovedadesComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
