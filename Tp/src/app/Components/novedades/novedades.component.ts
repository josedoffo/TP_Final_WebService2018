import { Component, OnInit } from '@angular/core';
import {Novedad} from './../../Models/Novedad';
import {Usuario} from './../../Models/Usuario';
import {NovedadServiceService} from './../../Services/novedad-service.service';
import { AuthenticationService } from '../../services/authentication.service';
import { StorageService } from '../../Services/storage.service';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.css'],
  providers:[NovedadServiceService]
})
export class NovedadesComponent implements OnInit {
  nuevo:Novedad;
  index:Novedad;
  novedadesArray: Array<Novedad>;
  filterArray : Array<Novedad>;
  constructor(private service : NovedadServiceService,public authenticationService:AuthenticationService, public storageservice:StorageService) { 
    console.log(this.storageservice.getUsuarioLogeado());
  }

  ngOnInit() {
    this.nuevo=new Novedad(null,new Usuario(null,null,null,null,null,null,null,null),"",null);
    this.index=new Novedad(null,new Usuario(null,null,null,null,null,null,null,null),"",null);
    this.consultar();
    console.log(this.authenticationService.userLogged.usuario);
    console.log(this.authenticationService.userLogged.perfil);
  }
  mod(z:Novedad){
    if(this.authenticationService.userLogged.perfil=='Cliente' && z.estado!="pendiente"){
      return false;

    }
    else{
      return true;
    }

  }

  consultar(){
    if(this.authenticationService.userLogged.perfil != 'Cliente')
    {
      this.service.getNovedad().subscribe(
        result=>{
          this.filterArray=JSON.parse(result.novedades);
        },
        error=>{
          alert("Error en la peticion de usuarios");
        }
      );
    }
    else
    {
      this.service.getPropia(this.authenticationService.userLogged.usuario).subscribe(
        result=>{
          this.filterArray=JSON.parse(result.novedades);
        },
        error=>{
          alert("Error en la peticion de usuarios");
        }
      );
    }

    console.log(this.novedadesArray);
  }
  detalles(item){
    this.index=item;
    console.log(this.index);
  }
  
  update(){
    this.service.updateNovedad(this.index).subscribe(
      data => {
        console.log("modificado correctamente.")
        alert("Actualizacion Completada");
        //actualizo la tabla de mensajes
        this.consultar();      
        return true;
      },
      error => {
        console.error("Error updating!");
        console.log(error);
        return false;
      });
  }
  public borrarUsuario(res: Novedad){
    this.service.eliminarNovedad(res).subscribe(
      data => {
        console.log("borrado correctamente.")
        return true;
      },
      error => {
        console.error("Error borrando!");
        console.log(error);
        return false;
      }      
    )
    alert("Novedad Eliminada");
    this.consultar();
}



send(){
  this.nuevo.Usuario=JSON.parse(localStorage.getItem('currentUser'));
  this.nuevo.estado="pendiente";
  console.log(this.nuevo);
  this.service.createNovedad(this.nuevo).subscribe(
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
    alert("Novedad Enviada");
    this.consultar();
}
}
