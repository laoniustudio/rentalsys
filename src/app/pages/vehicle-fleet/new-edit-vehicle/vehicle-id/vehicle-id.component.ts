import { Component, OnInit } from '@angular/core';
import {HttpSrvService} from '../../../../services/http-srv.service';
import {NgForm} from '@angular/forms';
import {LabelSrvService} from '../../../../services/label-srv.service';
import {VehicleSrvService} from '../../../../services/vehicle/vehicle-srv.service';
import {ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Route, Router} from '@angular/router';
import {VehicleIdInfo} from '../../../../utility/interfaces/vehicles';
declare var $: any;
@Component({
  selector: 'app-vehicle-id',
  templateUrl: './vehicle-id.component.html',
  styleUrls: ['./vehicle-id.component.css']
})
export class VehicleIdComponent implements OnInit {
  info: VehicleIdInfo = this.vehicleSrv.iDsInfo; // local vehicle informations
  vehicle_class: Array<string> = this.labelSrv.verhicle_class; // for front class selection
  constructor(private labelSrv: LabelSrvService, private http: HttpSrvService,
              private vehicleSrv: VehicleSrvService, private router: Router,
              private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
     console.log(this.activeRoute.snapshot.data['vehicleAll']);
     if (this.info) {
     this.http.httpGet('/vehicles/id_edit/' + this.vehicleSrv.iDsInfo.id).subscribe(
       (data: VehicleIdInfo) => {
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
     this.vehicleSrv.isNewVehicleSub().subscribe(
      (queryParams) => {
        if (queryParams['id']) {
          this.vehicleSrv.createOrUpdate(false, '/vehicles/id_edit/', form.value);
        } else {
          this.vehicleSrv.createOrUpdate(true, '/vehicles/ids/', form.value);
        }
      });
    // const req = this.vehicleSrv.createOrUpdate('/vehicles/ids/', '/vehicles/id_edit/', form.value);
    // req.subscribe(
    //   (data: VehicleIdInfo) => {
    //     this.vehicleSrv.iDsInfo = data;
    //     this.vehicleSrv.emitSwitchStyle();
    //     this.vehicleSrv.toGeneral();
    //   },
    //   (error) => {
    //     console.log(error);
    //   });
  }
}
