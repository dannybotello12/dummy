import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  constructor() { }
nombre:String
  ngOnInit() {

       this.nombre=localStorage.getItem("Nombre");
    


  }







}
