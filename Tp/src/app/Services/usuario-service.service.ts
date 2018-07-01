import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";


@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {


  constructor(private _http: Http) {

  }
 
  getUsusarios() {

    return this._http.get("http://localhost/tpfinal/web/app_dev.php/usuario/").map(res => res.json());

  }


  enviarUsuario(usuario) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(usuario);
    console.log("entro service create");
    return this._http.post('http://localhost/tpfinal/web/app_dev.php/usuario/new', body, options)
      .map((res: Response) => res.json());
  }

  borrarUsuario(usuario) {
    console.log(usuario.id);
    return this._http.delete(('http://localhost/tpfinal/web/app_dev.php/usuario/' + usuario.id))
      .map((res: Response) => res.json());
  }

  modificarUsuario(usuario) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(usuario);
    //envio en el body el mensaje transformado en un JSON
    return this._http.post('http://localhost/tpfinal/web/app_dev.php/usuario/' + usuario.id + '/edit', body, options)
      .map((res: Response) => res.json());
  }

}
