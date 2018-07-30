import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  sliderRange = 0; // defult front slider value
  currentDate: string;
  currentTime: string;
  constructor() { }

  ngOnInit() {
    this.datepickerCreate();
    this.getDate();
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
  /**
  * Get Date
  */
  getDate() {
    const today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    const hour = today.getHours();
    const min = today.getMinutes();
    const sec = today.getSeconds();
    const yyyy = today.getFullYear();
    if (dd < 10) {
        dd = Number('0' + dd);
    }
    if (mm < 10) {
        mm = Number('0' + mm);
    }
    const finalDate = mm + '/' + dd + '/' + yyyy;
    this.currentTime = hour + ':' + min + ':' + sec;
    this.currentDate = finalDate;
    return finalDate;
  }
}
