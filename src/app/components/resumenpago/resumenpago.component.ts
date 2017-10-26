import { Component, OnInit,ElementRef, Inject,ViewChild  } from '@angular/core';
import * as jsPDF from 'jspdf'
import Utils from '../../utils'
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
  }

  download(){
    console.log("ssd");
    Utils.CrearPdf();
  }

}
