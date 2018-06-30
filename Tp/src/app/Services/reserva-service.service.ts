import { Injectable } from '@angular/core';
import {Http, Response, Headers} from "@angular/http"; 
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";

@Injectable({
  providedIn: 'root'
})
export class ReservaServiceService {

  constructor(private _http: Http) { 

  }
  getReserva(){ 
 
   return this._http.get("http://localhost/tpfinal/web/app_dev.php/reserva/").map(res => res.json()); 
 
  } 
}
