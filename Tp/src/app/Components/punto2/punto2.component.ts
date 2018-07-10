import { Component, OnInit } from '@angular/core';
import {Vehiculo} from '../../Models/Vehiculo';
import { VehiculoServiceService } from './../../Services/vehiculo-service.service';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css'],
  providers: [VehiculoServiceService]
})
export class Punto2Component implements OnInit {

  nuevo:Vehiculo;
  vehiculos: Array<Vehiculo> = new Array();
  index:Vehiculo;
  imgUrl : string="assets/Images/default.jpg"
  FileToUpload=File=null;
  constructor(private servicio: VehiculoServiceService) {
    this.nuevo=new Vehiculo();
    this.index=new Vehiculo();
   }

  ngOnInit() {
  }

  handleFileInput(file :FileList){
    this.FileToUpload=file.item(0);
    var reader= new FileReader;
    reader.onload= (event:any) =>{
      this.imgUrl= event.target.result;
      this.index.pathimagen=event.target.result;
    }
    reader.readAsDataURL(this.FileToUpload);
    
  }

  seleccionar(auto){
    this.index=auto;
    console.log(this.index);
  }
    
  public mostrarHistorico(){
    this.servicio.getVehiculo().subscribe(
        result => {
          this.vehiculos = JSON.parse(result.vehiculos);
          console.log(this.vehiculos);
      },
      error => {
          alert("Error en la petición");
      }
    );

    console.log(this.vehiculos)
  }

  add(){
    var z : boolean;
    this.vehiculos.forEach(e => {
      if(e.patente==this.nuevo.patente)
      {
        z=true;
      }
    });
    if(!z){
    this.nuevo.pathimagen = this.imgUrl;
    console.log(this.nuevo);
    this.servicio.enviarVehiculo(this.nuevo).subscribe(
            data => {
              console.log("envio ok");
              console.log("agregado correctamente.");
              alert("Vehiculo agregado exitosamante");
              return true;
            },
            error => {
              console.error("Error saving!");
              alert("Este Vehiculo posee reservas activas, eliminelas primero");
              return false;
            }
      );
      this.mostrarHistorico();
    }
    else{
      alert("La patente ingresada esta en uso");

    }   
  }

  public eliminar(auto: Vehiculo){
    console.log(auto);
    
    this.servicio.borrarVehiculo(auto).subscribe(
    data=> {
    console.log("borrado correctamente.");
    this.mostrarHistorico();
    return true;
          },
    error=> {
    console.error("Error deleting!");
    this.mostrarHistorico();
    console.log(error);
    return false;
      }      
    );
    this.mostrarHistorico();
    alert("Vehiculo eliminado");
  }

  update(){
    this.servicio.modificarVehiculo(this.index).subscribe(
      data => {
        console.log("modificado correctamente.")
        alert("Actualizacion Completada");
        
        //actualizo la tabla de mensajes
        this.mostrarHistorico();      
        return true;
      },
      error => {
        console.error("Error updating!");
        console.log(error);
        return false;
      });
    console.log(this.index);
  }

  onFile(event){
    console.log(event);
  }
}
