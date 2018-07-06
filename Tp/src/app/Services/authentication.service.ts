import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userLoggedIn : boolean = false;
  userLogged: Usuario;
  userAdmin:boolean= false;
  constructor(private http:Http) { }
  login(username: string, password: string) {
    return this.http.post('http://localhost/tpfinal/web/app_dev.php/usuario/authenticate', JSON.stringify({ usuario: username, password: password }))
        .map(res => res.json());
}

logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.userLogged = new Usuario();
    this.userLoggedIn = false;  
    this.userAdmin=false;
} 

}