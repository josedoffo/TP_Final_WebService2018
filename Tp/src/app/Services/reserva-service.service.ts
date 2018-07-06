import { Injectable } from '@angular/core';
import {Http, Response, Headers,RequestOptions} from "@angular/http"; 
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
  enviarReserva(reserva) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(reserva);
    console.log("entro service create");
    return this._http.post('http://localhost/tpfinal/web/app_dev.php/reserva/new', body, options)
      .map((res: Response) => res.json());
  }
  borrarReserva(reserva) {
    console.log(reserva.id);
    return this._http.delete(('http://localhost/tpfinal/web/app_dev.php/reserva/' + reserva.id))
      .map((res: Response) => res.json());
  }
  modificarReserva(reserva) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(reserva);
    //envio en el body el mensaje transformado en un JSON
    return this._http.post('http://localhost/tpfinal/web/app_dev.php/reserva/' + reserva.id + '/edit', body, options)
      .map((res: Response) => res.json());
  }


}
