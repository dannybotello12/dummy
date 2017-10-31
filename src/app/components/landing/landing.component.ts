import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { DuplicarDateComponent } from '../fechaDuplicar/duplicarDate.component';
import { DialogService } from "ng2-bootstrap-modal";
import {Router,ActivatedRoute } from "@angular/router"
import { plantilla } from '../../Servicios/plantilla';

declare var $ :any;
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  encapsulation: ViewEncapsulation.None
})
export class LandingComponent implements OnInit {

 showpagadas: boolean = false;
 showplantillas:boolean = true;
 shownoplantillas: boolean = false;
 nombre:String;
Allplantillas:plantilla[]=[];
plantillapagar:plantilla;

constructor(private dialogService:DialogService ,  private router: Router,private route: ActivatedRoute) { }
caso: string;


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




this.caso=localStorage.getItem("caso");
this.Allplantillas=JSON.parse( localStorage.getItem("platillas"));
console.log(this.Allplantillas.length);

if (this.caso=="1")
{
if (this.Allplantillas.length > 0)
{
  this.showpagadas = false;
  this.showplantillas = true;
  this.shownoplantillas = false;
}

else{
  this.showpagadas = true;
  this.showplantillas = false;
  this.shownoplantillas = false;
}

}


if (this.caso=="2")
{
  if (this.Allplantillas.length > 0)
  {
    this.showpagadas = false;
    this.showplantillas = true;
    this.shownoplantillas = false;
  }

  else{
    this.showpagadas = true;
    this.showplantillas = false;
    this.shownoplantillas = false;
  }
}

if (this.caso=="3")
{
  this.showpagadas = false;
  this.showplantillas = false;
  this.shownoplantillas = true;
}

  }

  modalDuplicar():void{
    console.log("modal");
    let disposable = this.dialogService.addDialog(DuplicarDateComponent, {
        title:'Confirm title',
        message:'Confirm message'})
        .subscribe((isConfirmed)=>{
            //We get dialog result
            if(isConfirmed) {
                   this.router.navigate(['/duplicar']);
                 console.log("modal aceptar");
            }
            else {

                 console.log("modal rechazar");
            }
        });


  }

  pagar(idx:number)
  {
    this.plantillapagar=this.Allplantillas[idx];
    localStorage.setItem("platillasapagar", JSON.stringify(this.plantillapagar));
      localStorage.setItem("indexpagar", String(idx));
      this.router.navigate(['/pagar']);

  }
}
