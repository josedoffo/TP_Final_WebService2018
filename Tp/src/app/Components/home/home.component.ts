import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
imagenes = [];
imgUrl : string="assets/Images/default.jpg"
FileToUpload=File=null;
  constructor() { 
    this.imagenes=["assets/Images/1.jpg","assets/Images/2.jpg","assets/Images/3.jpg"]
  }
handleFileInput(file :FileList){
this.FileToUpload=file.item(0);
var reader= new FileReader;
reader.onload= (event:any) =>{
  this.imgUrl= event.target.result;
}
reader.readAsDataURL(this.FileToUpload);

}
  ngOnInit() {
  }

}
