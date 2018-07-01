import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Punto1Component} from './Components/punto1/punto1.component';
import {Punto2Component} from './Components/punto2/punto2.component';
import {HomeComponent} from './Components/home/home.component';
<<<<<<< HEAD

=======
>>>>>>> e3ea63eba5d571ee27cf43c1a2639e29b9cd2a79
import {LoginComponent} from './Components/login/login.component';


const routes: Routes = [
  {path: 'punto1', component:Punto1Component},
  {path: 'punto2',component:Punto2Component},
<<<<<<< HEAD
  {path: 'login',component:LoginComponent},
=======
>>>>>>> e3ea63eba5d571ee27cf43c1a2639e29b9cd2a79
  {path: 'login',component:LoginComponent},
  {path: 'home',component:HomeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
