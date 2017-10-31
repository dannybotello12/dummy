import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { plantilla } from '../../Servicios/plantilla';
export interface ConfirmModel {
  title:string;
  message:string;
}

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html'
})
export class ConfirmComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
  title: string;
  message: string;
  nombre:String;
 Allplantillas:plantilla[]=[];
 plantillapagar:plantilla;
  constructor(dialogService: DialogService) {
    super(dialogService);
  }
  confirm() {
    // we set dialog result as true on click on confirm button,
    // then we can get dialog result from caller code
    this.result = true;
    this.close();
  }

  ngOnInit() {

     this.nombre=localStorage.getItem("Nombre");
     this.plantillapagar=JSON.parse( localStorage.getItem("platillasapagar"));


  }

}
