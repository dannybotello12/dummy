import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
export interface ConfirmModel {
  title:string;
  message:string;
}

@Component({
  selector: 'app-duplicarDate',
  templateUrl: './duplicarDate.component.html'
})
export class DuplicarDateComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
  title: string;
  message: string;
  constructor(dialogService: DialogService) {
    super(dialogService);
  }
  confirm(e) {
    // we set dialog result as true on click on confirm button,
    // then we can get dialog result from caller code
    this.result = true;
    e.preventDefault();

  console.log(e);  
  console.log(  (<HTMLInputElement>document.getElementById('datetimepicker10')).value);

    localStorage.setItem("periodoseleccion",String((<HTMLInputElement>document.getElementById('datetimepicker10')).value));
    this.close();
  }

  ngOnInit() {
  }

}
