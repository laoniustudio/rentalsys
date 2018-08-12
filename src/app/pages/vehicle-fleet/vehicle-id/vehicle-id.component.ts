import { Component, OnInit } from '@angular/core';
import {HttpSrvService} from '../../../services/http-srv.service';
import {NgForm} from '@angular/forms';
import {LabelSrvService} from '../../../services/label-srv.service';
import {VehicleSrvService} from '../../../services/vehicle-srv.service';
import {ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Route, Router} from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-vehicle-id',
  templateUrl: './vehicle-id.component.html',
  styleUrls: ['./vehicle-id.component.css']
})
export class VehicleIdComponent implements OnInit {
  info: {}; // local vehicle informations
  vehicle_class: Array<string> = this.labelSrv.verhicle_class; // for front class selection
  constructor(private labelSrv: LabelSrvService, private http: HttpSrvService,
              private vehicleSrv: VehicleSrvService, private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.info = this.vehicleSrv.iDsInfo;
     if (!this.info) {
     this.http.httpGet('/vehicles/id_edit/' + this.vehicleSrv.vehicleId).subscribe(
       (data) => {
         console.log(data);
         this.info = data;
       },
       () => {

       });
    }
  }

  save(form: NgForm) {
    // http request
    this.vehicleSrv.iDsInfo = form.value;
    const req = this.vehicleSrv.getEditOrNewUrl('/vehicles/ids/', '/vehicles/id_edit/', form.value);
    req.subscribe(
      (data) => {
        this.vehicleSrv.vehicleId = data['id'];
        this.vehicleSrv.toGeneral();
      },
      (error) => {
        console.log(error);
      });
  }
}
