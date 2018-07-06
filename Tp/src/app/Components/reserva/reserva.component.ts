import { Component, OnInit } from '@angular/core';
import {Vehiculo} from '../../Models/Vehiculo';
import {VehiculoServiceService} from '../../Services/vehiculo-service.service';
import {Reserva} from '../../Models/Reserva';
import {AuthenticationService} from '../../Services/authentication.service';
import {Usuario} from '../../Models/Usuario';
import {ReservaServiceService} from '../../Services/reserva-service.service'


@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {
  reservaArray=new Array<Reserva>();
  vehiculoArray=new Array<Vehiculo>();
  nuevo:Reserva;
  index:Reserva;
  constructor(private service :VehiculoServiceService, private service2 : AuthenticationService,private service3 : ReservaServiceService) { }

  ngOnInit() {
    this.nuevo=new Reserva(this.service2.userLogged,new Vehiculo(null,null,null,null,null),null,null,null,null);
    this.index=new Reserva(this.service2.userLogged,new Vehiculo(null,null,null,null,null),null,null,null,null);
    this.service.getVehiculo().subscribe(
      result => {
              this.vehiculoArray = JSON.parse(result.vehiculos);
      },
      error => {
              alert("Error en la petición");
      }
  );
  }
  precio(){
    this.nuevo.costoRenta=this.nuevo.dias*150;
    this.index.costoRenta=this.index.dias*150;
  }
  reservar(){
    this.nuevo.usuario=JSON.parse(localStorage.getItem('currentUser'));
    this.nuevo.estado="pendiente";
    this.nuevo.fechaRenta= new Date();
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
    
      alert("Reserva Completada");
      
  }
  consultarReservas(){
    this.service3.getReserva().subscribe(
      result=>{
        this.reservaArray=JSON.parse(result.reservas);
  
      },
      error=>{
        alert("Error en la peticion de usuarios");
      }
    )
    console.log(this.reservaArray);
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