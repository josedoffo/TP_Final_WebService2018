import { Component, OnInit } from '@angular/core';
import {Novedad} from './../../Models/Novedad';
import {Usuario} from './../../Models/Usuario';
import {NovedadServiceService} from './../../Services/novedad-service.service';
@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.css']
})
export class NovedadesComponent implements OnInit {

  nuevo:Novedad;
  index:Novedad;
  novedadesArray:{};
  constructor(private service : NovedadServiceService) { }

  ngOnInit() {
    this.nuevo=new Novedad(null,new Usuario(null,null,null,null,null,null,null,null),"",null);
    this.index=new Novedad(null,new Usuario(null,null,null,null,null,null,null,null),"",null);
    this.consultar();
  }

  consultar(){
    this.service.getNovedad().subscribe(
      result=>{
        this.novedadesArray=JSON.parse(result.novedades);
      },
      error=>{
        alert("Error en la peticion de usuarios");
      }
    )
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
}
