import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../Models/Usuario';
import {UsuarioServiceService} from '../../Services/usuario-service.service';
import { Jsonp } from '@angular/http';


@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css'],
  providers:[UsuarioServiceService]
})
export class Punto1Component implements OnInit {
  usuarios:Array<Usuario>
  nuevo:Usuario;
  index:Usuario;
  constructor( private servicio:UsuarioServiceService, ) { 
    
  this.nuevo=new Usuario();
  this.index=new Usuario();
  this.usuarios=new Array<Usuario>();
  this.cargarUsuarios();

  }

  cargarUsuarios(){
    this.servicio.getUsusarios().subscribe(
      result=>{
        this.usuarios=JSON.parse(result.usuarios);
  
      },
      error=>{
        alert("Error en la peticion de usuarios");
      }
    )
  }
  ngOnInit() {

  }

  registrar(){
    console.log(this.nuevo);
    this.servicio.enviarUsuario(this.nuevo).subscribe(
      data => {
        console.log("envio ok");
        console.log("agregado correctamente.")
        return true;
      },
      error => {
        console.error("Error saving!");
        return false;
      }
      );
      
      this.cargarUsuarios();
      alert("Usuario Agregado Correctamente");
      
  }


  public borrarUsuario(user: Usuario){
    console.log(user);
    this.servicio.borrarUsuario(user).subscribe(
      data => {
        console.log("borrado correctamente.")
        return true;
        alert("Usuario Eliminado");
      },
      error => {
        console.error("Error borrando!");
        console.log(error);
        alert("El usuario posee reservas pendientes, eliminelas primero");
        return false;
      }      
    )
   
    this.cargarUsuarios();
  }

  ind(item){
    this.index=item;
    console.log(this.usuarios);
  }

  update(){
    this.servicio.modificarUsuario(this.index).subscribe(
    data => {
      console.log("modificado correctamente.")
      alert("Actualizacion Completada");
      //actualizo la tabla de mensajes
      this.cargarUsuarios();      
      return true;
    },
    error => {
      console.error("Error updating!");
      console.log(error);
      return false;
    });
  }
}
