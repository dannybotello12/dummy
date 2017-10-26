import { Component, OnInit,ElementRef, Inject,ViewChild  } from '@angular/core';
import * as jsPDF from 'jspdf'
import Utils from '../../utils'
declare var $ :any;
@Component({
  selector: 'app-resumenpago',
  templateUrl: './resumenpago.component.html',
  providers: [
  { provide: 'Window', useValue: window }
  ]

})
export class ResumenpagoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(window).scrollTop(0);
  }

  download(){
    console.log("ssd");
    Utils.CrearPdf();
  }

}
