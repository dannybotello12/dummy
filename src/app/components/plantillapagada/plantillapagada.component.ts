import { Component, OnInit,ElementRef, Inject,ViewChild, Pipe, PipeTransform  } from '@angular/core';
import * as jsPDF from 'jspdf'
declare var $ :any;
import Utils from '../../utils'
import { plantilla } from '../../Servicios/plantilla';
import { DialogService } from "ng2-bootstrap-modal";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DuplicarDateComponent } from '../fechaDuplicar/duplicarDate.component';


declare var $ :any;
declare var closeNav: Function ;
@Component({
  selector: 'app-plantillapagada',
  templateUrl: './plantillapagada.component.html'
  })
export class PlantillapagadaComponent implements OnInit {

@ViewChild('test') el:ElementRef;
Allplantillas:plantilla[]=[];
Allplantillaspagdas:plantilla[]=[];
plantillapagar:plantilla;


  constructor(  private dialogService:DialogService ,  private router: Router,private route: ActivatedRoute) { }

   nombre:String;
   documento:String;
   duplicada:plantilla;
  ngOnInit() {
    $(window).scrollTop(0);
    this.Allplantillaspagdas=JSON.parse( localStorage.getItem("platillaspagadas"));
     this.nombre=localStorage.getItem("Nombre");
     this.documento=localStorage.getItem("documento");
     $("#pantalla").on({
      touchstart: function(){
        closeNav();
      }, 
      click: function(){
        closeNav();
      } 
    });
  }

  modalDuplicar():void{

    let disposable = this.dialogService.addDialog(DuplicarDateComponent, {
        title:'Confirm title',
        message:'Confirm message'})
        .subscribe((isConfirmed)=>{
            //We get dialog result
            if(isConfirmed) {

              let nrosiguiente=   localStorage.getItem("nrosiguiente");
              let periodosiguiente:string=    localStorage.getItem("periodosiguiente");

              let siguiente= Number(nrosiguiente)+1;
                let agno1;

              if (periodosiguiente.substr(4,2)=="12")
              {
                 agno1= periodosiguiente.substr(0,4);
                 let nagno=Number(agno1)+1;
                let mes1="01";
                localStorage.setItem("periodosiguiente",String(agno1)+mes1);

              }
              else{
                let agno= Number(periodosiguiente.substr(0,4));
                let mes=  Number(periodosiguiente.substr(4,2))+1;

            if (String(mes).length==1)
            {
                localStorage.setItem("periodosiguiente",String(agno)+"0"+String(mes));
            }
            else{
                localStorage.setItem("periodosiguiente",String(agno)+String(mes));

            }



              }
              let persiguiente= (Number(periodosiguiente));


              localStorage.setItem("nrosiguiente",String(siguiente));


                  var today = new Date();
                  var dd = today.getDate();
                  var mm = today.getMonth()+1; //January is 0!
                  var minutes = today.getMinutes();
                  var hours = today.getHours();
                  var seconds = today.getSeconds();
                  let yyyy = today.getFullYear();

                 let dia;
                 let mes;
                 let minutos;
                 let segundos;


                  if(dd<10){
                    dia='0'+String(dd);
                  }
                  else{
                      dia=String(dd);
                  }
                  if(mm<10){
                      mes='0'+String(mm);
                  }
                  else
                  {
                      mes=String(mm);
                  }


                  if(minutes<10){
                    minutos='0'+String(minutes);
                  }
                  else{
                      minutos=String(minutes);
                  }

                  if(seconds<10){
                    segundos='0'+String(seconds);
                  }
                  else{
                      segundos=String(seconds);
                  }

                  let today1:string = dia+'/'+mes+'/'+String(yyyy);
                  let hora:string =String(hours)+':'+String(minutos)+':'+String(segundos);



            this.duplicada={
                 nro: nrosiguiente,
                 forma: "DUPLICADA",
                 fecha: String(today1),
                 hora:  String(hora),
                 tipo:"Independiente",
                 perido:periodosiguiente,
                 fechatrans:"pendiente",
                 total:"$ 288.200.00",
                 banco:"",horatrans:""}

                  this.Allplantillas=JSON.parse( localStorage.getItem("platillas"));
                  this.Allplantillas.push(this.duplicada);
                   localStorage.setItem("platillas", JSON.stringify(this.Allplantillas));
                   localStorage.setItem("duplicadaplatillas",JSON.stringify(this.duplicada));
                   this.router.navigate(['/duplicar']);


            }
            else {

              
            }
        });


  }

  download(idx:number) {


      this.plantillapagar=this.Allplantillaspagdas[idx];
      localStorage.setItem("platillasapagar", JSON.stringify(this.plantillapagar));
      localStorage.setItem("indexpagar", String(idx));
      this.router.navigate(['/resumenpago']);
    /*  Utils.CrearPdf();



  /*let pdf = new jsPDF('l', 'pt', 'a4');
   let options = {
      pagesplit: true
   };
   pdf.addHTML(this.el.nativeElement, 0, 0, options, () => {
      pdf.save("test.pdf");
   });*/

  }


}
