import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { DuplicarDateComponent } from '../fechaDuplicar/duplicarDate.component';
import { DialogService } from "ng2-bootstrap-modal";
import {Router} from "@angular/router"
declare var $ :any;
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  encapsulation: ViewEncapsulation.None
})
export class LandingComponent implements OnInit {

 showplantillas:boolean = true;
 showpagadas: boolean = false;
 shownoplantillas: boolean = false;
  constructor(private dialogService:DialogService ,  private router: Router) { }

  ngOnInit() {

$(window).scrollTop(0);



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
}
