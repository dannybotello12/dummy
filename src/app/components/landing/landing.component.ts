import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { DuplicarDateComponent } from '../fechaDuplicar/duplicarDate.component';
import { DialogService } from "ng2-bootstrap-modal";
import {Router} from "@angular/router"

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  encapsulation: ViewEncapsulation.None
})
export class LandingComponent implements OnInit {


  constructor(private dialogService:DialogService ,  private router: Router) { }

  ngOnInit() {





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
