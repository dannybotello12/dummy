import { Component, OnInit } from '@angular/core';

// Declaramos las variables para jQuery
declare var jQuery:any;
declare var $:any;


@Component({
  selector: 'app-modalmesagno',
  templateUrl: './modalmesagno.component.html'
})



export class ModalmesagnoComponent implements OnInit {

  title = 'Curso de Angular 2 - victorroblesweb.es';

   public mostrarTitulo(){
     console.log("click");

    // Usamos jQuery con normalidad
     $(".title").slideToggle();}


  datepicker()
  {
    $('.date-own').datepicker({
     minViewMode: 1,
     format: 'yyyy/MM'
   });

  }


  public calendar()
  {
    $(function() {
       $('.date-picker').datepicker( {
           changeMonth: true,
           changeYear: true,
           showButtonPanel: true,
           dateFormat: 'MM yy',
           onClose: function(dateText, inst) {
               var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
               var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
               $(this).datepicker('setDate', new Date(year, month, 1));
           },
           beforeShow : function(input, inst) {
               var datestr;
                  var month;
                   var year;
               if ((datestr = $(this).val()).length > 0) {
                   year = datestr.substring(datestr.length-4, datestr.length);
                   month = jQuery.inArray(datestr.substring(0, datestr.length-5), $(this).datepicker('option', 'monthNamesShort'));
                   $(this).datepicker('option', 'defaultDate', new Date(year, month, 1));
                   $(this).datepicker('setDate', new Date(year, month, 1));
               }
           }
       });
   });
  }

  constructor() { }

  ngOnInit() {
  }

}
