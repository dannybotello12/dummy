import { Component, OnInit,ViewChild  } from '@angular/core';
import { ConfirmComponent } from '../confirm/confirm.component';
import { DialogService } from "ng2-bootstrap-modal";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DuplicarDateComponent } from '../fechaDuplicar/duplicarDate.component';
import { plantilla } from '../../Servicios/plantilla';
declare var $ :any;
@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.component.html'
})
export class PagarComponent implements OnInit {
  plantillapagar:plantilla;
  documento:string;
   nombre:string;
   fechapago:string;
    Allplantillaspagdas:plantilla[]=[];
    Allplantillas:plantilla[]=[];

  constructor(private dialogService:DialogService ,  private router: Router) { }
caso: number;
  ngOnInit() {
    $(window).scrollTop(0);
      this.documento=localStorage.getItem("documento");
      this.nombre=localStorage.getItem("Nombre");
       this.plantillapagar=JSON.parse( localStorage.getItem("platillasapagar"));
       this.fechapago=this.plantillapagar.perido+"12";


  }


  showConfirm() {

             console.log("modal");
              let disposable = this.dialogService.addDialog(ConfirmComponent, {
                  title:'Confirm title',
                  message:'Confirm message'})
                  .subscribe((isConfirmed)=>{
                      //We get dialog result
                      if(isConfirmed) {

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


                              this.plantillapagar.banco=(<HTMLInputElement>document.getElementById('banco')).value ;
                              this.plantillapagar.fechatrans= today1;
                              this.plantillapagar.horatrans= hora;
                              this.Allplantillaspagdas=JSON.parse( localStorage.getItem("platillaspagadas"));
                              this.Allplantillas=JSON.parse( localStorage.getItem("platillas"));
                              this.Allplantillaspagdas.push(this.plantillapagar);
                              let indice=localStorage.getItem("indexpagar");
                              this.Allplantillas.splice(Number(indice),1);
                              localStorage.setItem("platillaspagadas",JSON.stringify(this.Allplantillaspagdas));
                              localStorage.setItem("platillas",JSON.stringify(this.Allplantillas));
                              localStorage.setItem("platillasapagar",JSON.stringify(this.plantillapagar));


                            this.router.navigate(['/resumenpago']);
                            console.log("modal aceptar");
                      }
                      else {

                           console.log("modal rechazar");
                      }
                  });
              //We can close dialog calling disposable.unsubscribe();
              //If dialog was not closed manually close it by timeout

          }



}
