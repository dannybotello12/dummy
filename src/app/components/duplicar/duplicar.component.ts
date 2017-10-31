import { Component, OnInit } from '@angular/core';
import { plantilla } from '../../Servicios/plantilla';
import {Router,ActivatedRoute } from "@angular/router"

declare var $ :any;
declare var closeNav: Function ;
@Component({
  selector: 'app-duplicar',
  templateUrl: './duplicar.component.html'
})
export class DuplicarComponent implements OnInit {

  constructor(private router:Router) { }
 nombre:String;
 duplicada:plantilla;
 Allplantillas:plantilla[]=[];
 plantillapagar:plantilla;

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

  pagar()
  {
      this.Allplantillas=JSON.parse( localStorage.getItem("platillas"));
      console.log(this.Allplantillas.length);
      this.duplicada=JSON.parse( localStorage.getItem("duplicadaplatillas"));
      localStorage.setItem("platillasapagar", JSON.stringify(this.duplicada));
      localStorage.setItem("indexpagar", String(this.Allplantillas.length-1));
      this.router.navigate(['/pagar']);

  }

}
