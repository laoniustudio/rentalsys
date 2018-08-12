import { Component, OnInit } from '@angular/core';
import {HttpSrvService} from '../../../services/http-srv.service';
import {NgForm} from '@angular/forms';
import {LabelSrvService} from '../../../services/label-srv.service';
import {VehicleIdComponent} from '../vehicle-id/vehicle-id.component';
import {VehicleSrvService} from '../../../services/vehicle-srv.service';
declare var $: any;
@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  currentDate: string;
  currentTime: string;
  info: {}; // local vehicle informations
  location: Array<string> = this.labelSrv.location; // for front location selection
  vehicle_class: Array<string> = this.labelSrv.verhicle_class; // for front class selection
  vehicle_status: Array<string> = this.labelSrv.vehicle_status; // for front status selection
  constructor(private labelSrv: LabelSrvService, private http: HttpSrvService,
              private vehicleSrv: VehicleSrvService) { }

  ngOnInit() {
    this.datepickerCreate();
    this.getDate();
    this.info = this.vehicleSrv.generalInfo;
     this.http.httpGet('/vehicles/general_edit/' + this.vehicleSrv.vehicleId).subscribe(
       (data) => {
         console.log(data);
         this.info = data;
       },
       (error) => {
          console.log(error);
       });

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
    let mm = today.getMonth() + 1; // January is 0!
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

  save(form: NgForm) {
    // add missed date info
    form.value['first_reg'] = $('#first_reg').val();
    form.value['license_expire'] = $('#license_expire').val();
    form.value['ids'] = this.vehicleSrv.vehicleId;
    this.vehicleSrv.generalInfo = form.value;
    const req = this.vehicleSrv.getEditOrNewUrl('/vehicles/info/', '/vehicles/general_edit/', form.value);
    // http request
    req.subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      });
  }
}
