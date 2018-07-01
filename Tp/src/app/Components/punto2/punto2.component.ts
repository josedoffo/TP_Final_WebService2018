import { Component, OnInit } from '@angular/core';
import {Vehiculo} from '../../Models/Vehiculo';
@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {
nuevo:Vehiculo;
imgUrl : string="assets/Images/default.jpg"
FileToUpload=File=null;
  constructor() {
    this.nuevo=new Vehiculo();
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
add(){
  console.log(this.nuevo);
}
onFile(event){
  console.log(event);
}
}
