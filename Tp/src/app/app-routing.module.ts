import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Punto1Component} from './Components/punto1/punto1.component';
import {Punto2Component} from './Components/punto2/punto2.component';
import {HomeComponent} from './Components/home/home.component';
<<<<<<< HEAD
=======

>>>>>>> 648de94f92b3eb33da55a1cf825505fe2451f3e9
import {LoginComponent} from './Components/login/login.component';


const routes: Routes = [
  {path: 'punto1', component:Punto1Component},
  {path: 'punto2',component:Punto2Component},
<<<<<<< HEAD
  {path: 'login',component:LoginComponent}
=======
  {path: 'login',component:LoginComponent},
  {path: 'home',component:HomeComponent}
>>>>>>> 648de94f92b3eb33da55a1cf825505fe2451f3e9
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
