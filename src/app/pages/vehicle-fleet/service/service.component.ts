import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.datepickerCreate();
  }
  /**
  * Datepicker init
  */
  datepickerCreate() {
    $('.date-picker-input').datepicker({
      autoclose: true,
      startDate: new Date()
    });
  }
}
