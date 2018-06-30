import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {
  usuarios=new Array;
  constructor() { 
    this.usuarios.push(2);
    
  }

  ngOnInit() {
  }

}
