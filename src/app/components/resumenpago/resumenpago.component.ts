import { Component, OnInit,ElementRef, Inject,ViewChild  } from '@angular/core';
import * as jsPDF from 'jspdf'
import Utils from '../../utils'
declare var $ :any;
declare var closeNav: Function ;
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
    $("#pantalla").on({
      touchstart: function(){
        closeNav();
      }, 
      click: function(){
        closeNav();
      } 
    });
    $(window).scrollTop(0);
  }

  download(){
  
    Utils.CrearPdf();
  }

}
