import { Component, OnInit } from '@angular/core';
import {HttpSrvService} from '../../../services/http-srv.service';
import {ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router} from '@angular/router';
import {GeneralSrvService} from '../../../services/general-srv.service';
import {VehicleSrvService} from '../../../services/vehicle/vehicle-srv.service';
declare var $: any;
@Component({
  selector: 'app-new-vehicle',
  templateUrl: './new-edit-vehicle.component.html',
  styleUrls: ['./new-edit-vehicle.component.css']
})
export class NewEditVehicleComponent implements OnInit {
  constructor(private router: Router, private http: HttpSrvService,
              private vehicleSrv: VehicleSrvService, private gSrv: GeneralSrvService) { }

  ngOnInit() {
    this.vehicleSrv.switchStyleSub().subscribe(
      () => {
          this.gSrv.selectStyleSwitch('.nav-link', 'active show', 'active show');
      }
    );
  }

}
