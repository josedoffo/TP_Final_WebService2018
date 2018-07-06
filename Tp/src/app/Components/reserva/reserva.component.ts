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
  constructor(private service :VehiculoServiceService, private service2 : AuthenticationService,private service3 : ReservaServiceService) { }

  ngOnInit() {
    this.nuevo=new Reserva(this.service2.userLogged,new Vehiculo(null,null,null,null,null),null,null,null,null);
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
}
