import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {VehicleSrvService} from '../../../services/vehicle/vehicle-srv.service';
import {LabelSrvService} from '../../../services/label-srv.service';
import {VehicleIdInfo} from '../../../utility/interfaces/vehicles';
import {HttpSrvService} from '../../../services/http-srv.service';
import {NgForm} from '@angular/forms';
import {GeneralSrvService} from '../../../services/general-srv.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-comps-vehicle-id',
  templateUrl: './comps-vehicle-id.component.html',
  styleUrls: ['./comps-vehicle-id.component.css']
})
export class CompsVehicleIdComponent implements OnInit {
  @Input() newVehicle: boolean;
  info: VehicleIdInfo;
  vehicle_class: Array<string> = this.labelSrv.verhicle_class; // for front class selection
  pk: string = this.activeRoute.snapshot.paramMap.get('id'); // the pk to identify vehicles on server database
  // Subscription
  serverSub: Subscription;
  constructor(private labelSrv: LabelSrvService, private http: HttpSrvService,
              private vehicleSrv: VehicleSrvService, private router: Router,
              private activeRoute: ActivatedRoute, private gSrv: GeneralSrvService) {
  }

  ngOnInit() {
    if (!this.newVehicle) {
      this.saveInfo();
    }
  }

  formSubmit(form: NgForm) {
     // save ID info to local service storage
     this.vehicleSrv.vehicleAllInfo.vin = form.value['vin'];
     this.vehicleSrv.vehicleAllInfo.license_no = form.value['license_no'];
     this.vehicleSrv.vehicleAllInfo.unit = form.value['unit'];
     this.vehicleSrv.vehicleAllInfo.vehicle_class = form.value['vehicle_class'];
     this.vehicleSrv.vehicleAllInfo.id = this.pk;
     // save ID info to server
     this.serverSub = this.vehicleSrv.createOrUpdate(this.newVehicle, '/vehicles/id_edit/', this.pk, form.value).subscribe(
       (data) => {
         console.log(data);
       });
  }
  /**
   * Save data to service and local
   * */
  saveInfo() {
      const data = this.activeRoute.snapshot.data['vehicleAll'];
      this.vehicleSrv.vehicleAllInfo = data;
      this.info = data;
  }
}
