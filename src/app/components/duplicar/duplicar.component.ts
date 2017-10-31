import { Component, OnInit } from '@angular/core';
import { plantilla } from '../../Servicios/plantilla';

declare var $ :any;
declare var closeNav: Function ;
@Component({
  selector: 'app-duplicar',
  templateUrl: './duplicar.component.html'
})
export class DuplicarComponent implements OnInit {

  constructor() { }
 nombre:String;
 duplicada:plantilla;
  
  ngOnInit() {
    $("#pantalla").on({
      touchstart: function(){
        closeNav();
      }, 
      click: function(){
        closeNav();
      } 
    });

    $(window).scrollTop(0);
       this.nombre=localStorage.getItem("Nombre");

       this.duplicada=JSON.parse( localStorage.getItem("duplicadaplatillas"));
       console.log(   this.duplicada);


  }

}
