import { Component, OnInit } from '@angular/core';
import {Vehiculo} from '../../Models/Vehiculo';
import { VehiculoServiceService } from './../../Services/vehiculo-service.service';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
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
    }
    reader.readAsDataURL(this.FileToUpload);
    
  }
  seleccionar(auto){
    this.index=auto;
    console.log(this.index);
  }
    
  public mostrarHistorico(){
    // Llamamos al método del servicio
    // para cargar todas las Notas
    this.servicio.getVehiculo().subscribe(
        result => {
          this.vehiculos = JSON.parse(result.vehiculos);
          console.log(this.vehiculos);
      },
      error => {
          alert("Error en la petición");
      }
    );
    //this.ev = new Evaluacion(1,"Apu001111",4,7,9);
    //this.notas.push(this.ev);
    console.log(this.vehiculos)
  }

  add(){
    this.nuevo.pathimagen = "Link Imagen";
    console.log(this.nuevo);
    this.servicio.enviarVehiculo(this.nuevo).subscribe(
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
      this.mostrarHistorico();
  }

  public eliminar(auto: Vehiculo){
    console.log(auto);
    
    this.servicio.borrarVehiculo(auto).subscribe(
    data=> {
    console.log("borrado correctamente.")
    return true;
          },
    error=> {
    console.error("Error deleting!");
    console.log(error);
    return false;
      }      
    );
    this.mostrarHistorico();
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
  }

  onFile(event){
    console.log(event);
  }
}
