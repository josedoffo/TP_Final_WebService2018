import { Component, OnInit } from '@angular/core';
import {Vehiculo} from '../../Models/Vehiculo';
@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {
nuevo:Vehiculo;
  constructor() {
    this.nuevo=new Vehiculo();
   }

  ngOnInit() {
  }
add(){
  console.log(this.nuevo);
}
onFile(event){
  console.log(event);
}
}
