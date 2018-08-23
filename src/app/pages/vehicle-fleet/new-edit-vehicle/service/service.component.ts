import { Component, OnInit } from '@angular/core';
import {LabelSrvService} from '../../../../services/label-srv.service';
import {VehicleSrvService} from '../../../../services/vehicle/vehicle-srv.service';
import {NgForm} from '@angular/forms';
import {HttpSrvService} from '../../../../services/http-srv.service';
declare var $: any;
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  info: {};
  location: Array<string> = this.labelSrv.location;
  constructor(private labelSrv: LabelSrvService, private vehicleSrv: VehicleSrvService,
              private http: HttpSrvService) { }

  ngOnInit() {
    this.datepickerCreate();
    this.info = this.vehicleSrv.serviceInfo;
     this.http.httpGet('/vehicles/service_edit/' + this.vehicleSrv.iDsInfo.pk).subscribe(
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
  save(form: NgForm) {
    form.value['in_service_date'] = $('#in_service_date').val();
    form.value['invoice_date'] = $('#invoice_date').val();
    form.value['delivery_date'] = $('#delivery_date').val();
    form.value['expected_delivery_date'] = $('#expected_delivery_date').val();
    form.value['insepection_date'] = $('#insepection_date').val();
    form.value['out_fleet_date'] = $('#out_fleet_date').val();
    form.value['date_sold'] = $('#date_sold').val();
    form.value['ids'] = this.vehicleSrv.iDsInfo.pk;
    this.vehicleSrv.serviceInfo = form.value;
    const req = this.vehicleSrv.createOrUpdate('/vehicles/service/', '/vehicles/service_edit/', form.value);
    req.subscribe(
      (data) => {
        console.log(data)
      },
      (error) => {
        console.log(error);
      });

  }
}
