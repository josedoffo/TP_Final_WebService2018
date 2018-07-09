import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';
import { Usuario } from '../../models/usuario';
import { StorageService} from '../../services/storage.service';
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
    public authenticationService: AuthenticationService,
    public storageservice : StorageService
  ) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.authenticationService.login(this.userform.usuario, this.userform.password)
      .subscribe(
        data => {
          var user = JSON.parse(data.usuario);

          if (user.usuario != null) {
            //vbles para mostrar-ocultar cosas en el header
            this.authenticationService.userLoggedIn = true;
            this.authenticationService.userLogged = user;
            //localstorage usado para mostrar o no un componente
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.authenticationService.userLogged = new Usuario(user.apellido, user.nombres, user.dni, user.email, user.telefono, user.usuario, 'nothing', user.perfil, user.id);
            this.storageservice.setUsuarioLogeado(new Usuario(user.apellido, user.nombres, user.dni, user.email, user.telefono, user.usuario, 'nothing', user.perfil, user.id));
            console.log(this.authenticationService.userLogged);
            if (user.perfil == 'Administrador') {
              this.authenticationService.userAdmin = true;
              this.router.navigateByUrl('/home');
            } else {
              this.router.navigateByUrl('/home');
            }
          }
          else {
            alert("Usuario/Contraseña invalido");
          }
        },
        error => {
          console.log("error...");
          console.log(error);
        });
  }
}
