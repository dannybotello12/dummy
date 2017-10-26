import { Component, OnInit } from '@angular/core';
declare var $ :any;
@Component({
  selector: 'app-duplicar',
  templateUrl: './duplicar.component.html'
})
export class DuplicarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(window).scrollTop(0);
  }

}
