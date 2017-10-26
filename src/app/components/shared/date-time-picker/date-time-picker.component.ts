import { Component, OnInit } from '@angular/core';
declare var $ :any;
@Component({
  selector: 'app-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.css']
})
export class DateTimePickerComponent implements OnInit {

  private idDateTimePicker:String ="#datetimepicker10";
  
    private configDateTimePicker:any={
      viewMode: 'years',
      format: 'MM/YYYY'
    };
  
    constructor() { }
  
    ngOnInit() {
      this.configureDataTimePicker();
    }
  
    private configureDataTimePicker():void{
      $(this.idDateTimePicker).datetimepicker(this.configDateTimePicker);
    }

}
