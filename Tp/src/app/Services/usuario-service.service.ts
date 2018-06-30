import { Injectable } from '@angular/core';
import {Http, Response, Headers} from "@angular/http"; 
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  constructor(private _http: Http) { 

  }
  getUsusarios(){ 
 
   return this._http.get("http://localhost/tpfinal/web/app_dev.php/usuario/").map(res => res.json()); 
 
  } 
}
