import { Injectable } from '@angular/core';
import {Vehiculo} from '../Models/Vehiculo';
import {Usuario} from '../Models/Usuario';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  vehiculoseleccionado:Vehiculo;
  usuarioLogeado:Usuario;
  constructor() {
  this.vehiculoseleccionado= (this.vehiculoseleccionado == null) ? new Vehiculo() : this.vehiculoseleccionado;
  this.usuarioLogeado= (this.usuarioLogeado == null) ? new Usuario() : this.usuarioLogeado;
   }


  setVehiculoSeleccionado(veh){
    this.vehiculoseleccionado=veh;
  }
  getVehiculoSeleccioado(){
    return this.vehiculoseleccionado;
  }
  setUsuarioLogeado(user:Usuario){
    this.usuarioLogeado=user;
  }
  getUsuarioLogeado(){
    return this.usuarioLogeado;
  }
  
}
