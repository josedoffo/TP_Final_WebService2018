import { Component, OnInit } from '@angular/core';
import {Vehiculo} from '../../Models/Vehiculo';
import {VehiculoServiceService} from '../../Services/vehiculo-service.service';
import {Reserva} from '../../Models/Reserva';
import {AuthenticationService} from '../../Services/authentication.service';
import {Usuario} from '../../Models/Usuario';
import {ReservaServiceService} from '../../Services/reserva-service.service';
import { StorageService } from '../../Services/storage.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css'],
  providers: [ VehiculoServiceService, ReservaServiceService]
})
export class ReservaComponent implements OnInit {
/*  filtroArray= new Array<Reserva>();
  reservaArray=new Array<Reserva>();
  vehiculoArray=new Array<Vehiculo>();
  filtro=new Array<Vehiculo>();*/
  reservaArray:Array<Reserva>;
  
  nuevo:Reserva;
  index:Reserva;
  constructor(public authenticationService : AuthenticationService, private service3:ReservaServiceService , public storageservice:StorageService) {
    console.log(authenticationService.userLogged);
  }
  ngOnInit() {
//    console.log(this.storageservice.getUsuarioLogeado());
    this.nuevo=new Reserva();
    this.nuevo.usuario = this.storageservice.usuarioLogeado;
    this.nuevo.vehiculo=this.storageservice.getVehiculoSeleccioado();
    console.log(this.storageservice.usuarioLogeado);
    console.log(this.storageservice.usuarioLogeado.perfil);
    console.log(this.storageservice.usuarioLogeado.usuario);
    //  console.log(this.authenticationService.userLogged);
    this.index=new Reserva(this.storageservice.usuarioLogeado,new Vehiculo(null,null,null,null,null),null,null,null,null);
  }
  precio(){
    this.nuevo.costoRenta=this.nuevo.dias*150;
    this.index.costoRenta=this.index.dias*150;
  }
  reservar(){ 
    this.nuevo.usuario=this.storageservice.usuarioLogeado;
    this.nuevo.estado="pendiente";
    this.nuevo.fechaRenta= new Date("06-07-2018");
    console.log(this.nuevo);
    this.service3.enviarReserva(this.nuevo).subscribe(
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
    
      alert("Reserva Completada"); //ésto no se ejecuta
      
  }



  consultarReservas(){
    if(this.storageservice.usuarioLogeado.perfil == "Cliente")
    {
      this.service3.getPropio(this.storageservice.usuarioLogeado.usuario).subscribe(
        result=>{
          this.reservaArray=JSON.parse(result.reservas);
    
        },
        error=>{
          alert("Error en la peticion de usuarios");
        }
      );
    }
    else
    {
      this.service3.getReserva().subscribe(
        result=>{
          this.reservaArray=JSON.parse(result.reservas);
    
        },
        error=>{
          alert("Error en la peticion de usuarios");
        }
      );  
    }
  }

  detalles(item){
    console.log(item);
    this.index=item;
  }


  update(){
    this.service3.modificarReserva(this.index).subscribe(
    data => {
      console.log("modificado correctamente.")
      alert("Actualizacion Completada");
      //actualizo la tabla de mensajes
      this.consultarReservas();      
      return true;
    },
    error => {
      console.error("Error updating!");
      console.log(error);
      return false;
    });
  }
  
  public borrarUsuario(res: Reserva){
    this.service3.borrarReserva(res).subscribe(
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
    alert("Reserva Eliminado");
    this.consultarReservas();
}
}