import { Injectable } from '@angular/core';
import {Http, Response, Headers,RequestOptions} from "@angular/http"; 
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
@Injectable({
  providedIn: 'root'
})
export class NovedadServiceService {

  constructor(private _http: Http) { 

  }

  getPropia(username: string) {
    return this._http.post('http://localhost/tpfinal/web/app_dev.php/novedad/propia', JSON.stringify({ usuario: username }))
        .map(res => res.json());
}

  getNovedad(){ 
   return this._http.get("http://localhost/tpfinal/web/app_dev.php/novedad/").map(res => res.json()); 
  } 

createNovedad(novedad) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(novedad);
    return this._http.post('http://localhost/tpfinal/web/app_dev.php/novedad/new', body, options).map((res: Response) => res.json());
}

updateNovedad(novedad)
{
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  let body = JSON.stringify(novedad);
  let postURL = "http://localhost/tpfinal/web/app_dev.php/novedad/" + novedad.id + "/edit"
  return this._http.post(postURL, body, options).map((res: Response) => res.json());
}

eliminarNovedad(novedad)
{
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  let body = JSON.stringify(novedad);
  let postURL = "http://localhost/tpfinal/web/app_dev.php/novedad/"+novedad.id;
  return this._http.delete(postURL, options).map((res: Response) => res.json());
}

}
