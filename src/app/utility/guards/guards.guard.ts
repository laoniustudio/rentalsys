import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, NavigationEnd, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {VehicleSrvService} from "../../services/vehicle/vehicle-srv.service";
import {VehicleAllInfo, VehicleIdInfo} from '../interfaces/vehicles';
import {GeneralSrvService} from '../../services/general-srv.service';

@Injectable({
  providedIn: 'root'
})
/**
 * when create new vehicle need to file out the ids info first, in order to nav to general or service content
 * cause need to get pk of the new vehicle
 * */
export class NewVehicleGuard implements CanActivate {
  constructor(private vehicleSrv: VehicleSrvService, private router: Router,
              private gSrv: GeneralSrvService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const pk = this.vehicleSrv.vehicleAllInfo.id;
    if (pk) {
      return true;
    } else {
      return false;
    }
  }
}
