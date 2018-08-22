import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild} from '@angular/router';
import { Observable } from 'rxjs';
import {VehicleSrvService} from "../../services/vehicle-srv.service";
import {VehicleIdInfo} from "../interfaces/vehicles";

@Injectable({
  providedIn: 'root'
})
/**
 * when create new vehicle need to file out the ids info first, in order to nav to general or service content
 * cause need to get pk of the new vehicle
 * */
export class NewVehicleGuard implements CanActivate {
  constructor(private vehicleSrv: VehicleSrvService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const IdsInfo: VehicleIdInfo = this.vehicleSrv.iDsInfo;
    if (IdsInfo ? IdsInfo.pk : IdsInfo) {
      return true;
    } else {
      return false;
    }
  }
}
