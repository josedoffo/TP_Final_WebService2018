import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';
import { Usuario } from '../../models/usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userform: Usuario = new Usuario();
  returnUrl: string;
  public temp = new Usuario();


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.authenticationService.login(this.userform.usuario, this.userform.password)
      .subscribe(
        data => {
          var user = JSON.parse(data.usuario);
          console.log(user);
          if (user.usuario != null) {
            //vbles para mostrar-ocultar cosas en el header
            this.authenticationService.userLoggedIn = true;            
            this.authenticationService.userLogged = user;
            //localstorage usado para mostrar o no un componente
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.router.navigateByUrl('/home');
            this.authenticationService.userLogged = new Usuario(user.apellido, user.nombres, user.dni, user.email, user.telefono, user.username, "NELSON", user.perfil, user.id);
           if(user.perfil=='Administrador'){
            this.authenticationService.userAdmin=true;
            alert("usuario admin");            
           }
          }
          else{
            alert("Usuario/Contraseña invalido");
          }
        },
        error => {
          console.log("error...");
          console.log(error);
        });
  }
}
