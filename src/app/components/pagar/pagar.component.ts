import { Component, OnInit,ViewChild  } from '@angular/core';
import { ConfirmComponent } from '../confirm/confirm.component';
import { DialogService } from "ng2-bootstrap-modal";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';




@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.component.html'
})
export class PagarComponent implements OnInit {

  constructor(private dialogService:DialogService ,  private router: Router) { }

  ngOnInit() {
  }


  showConfirm() {

             console.log("modal");
              let disposable = this.dialogService.addDialog(ConfirmComponent, {
                  title:'Confirm title',
                  message:'Confirm message'})
                  .subscribe((isConfirmed)=>{
                      //We get dialog result
                      if(isConfirmed) {
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
