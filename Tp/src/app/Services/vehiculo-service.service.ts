import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http"; 
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";

@Injectable({
  providedIn: 'root'
})
export class VehiculoServiceService {

  constructor(private _http: Http) { 

  }
  getVehiculo(){ 
 
   return this._http.get("http://localhost/tpfinal/web/app_dev.php/vehiculo/").map(res => res.json()); 
 
  }

  enviarVehiculo(vehiculo){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(vehiculo);
    console.log("entro service create");
    return this._http.post('http://localhost/tpfinal/web/app_dev.php/vehiculo/new', body, options).map((res: Response) => res.json());    
  }

  borrarVehiculo(vehiculo) {

    return this._http.delete(('http://localhost/tpfinal/web/app_dev.php/vehiculo/' + vehiculo.id))
      .map((res: Response) => res.json());
  }

  modificarVehiculo(vehiculo) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(vehiculo);
    //envio en el body el mensaje transformado en un JSON
    return this._http.post('http://localhost/tpfinal/web/app_dev.php/vehiculo/' + vehiculo.id + '/edit', body, options)
      .map((res: Response) => res.json());
  }
}
