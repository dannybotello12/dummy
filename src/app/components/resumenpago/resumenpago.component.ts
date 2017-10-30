import { Component, OnInit,ElementRef, Inject,ViewChild  } from '@angular/core';
import * as jsPDF from 'jspdf'
import Utils from '../../utils'
import { plantilla } from '../../Servicios/plantilla';
declare var $ :any;
@Component({
  selector: 'app-resumenpago',
  templateUrl: './resumenpago.component.html',
  providers: [
  { provide: 'Window', useValue: window }
  ]

})
export class ResumenpagoComponent implements OnInit {
  plantillapagar:plantilla;
  documento:string;
   nombre:string;
   fechapago:string;
    
  constructor() { }

  ngOnInit() {
    $(window).scrollTop(0);

    this.documento=localStorage.getItem("documento");
    this.nombre=localStorage.getItem("Nombre");
    this.plantillapagar=JSON.parse( localStorage.getItem("platillasapagar"));

  }

  download(idx:number){

    Utils.CrearPdf();
  }

}
