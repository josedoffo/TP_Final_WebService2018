import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
imagenes = [];

  constructor() { 
    this.imagenes=["assets/Images/1.jpg","assets/Images/2.jpg","assets/Images/3.jpg"]
  }

  ngOnInit() {
  }

}
