import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {VehicleAllInfo} from '../../utility/interfaces/vehicles';
import {Observable, of} from 'rxjs';
import {HttpSrvService} from '../http-srv.service';
import {VehicleSrvService} from './vehicle-srv.service';

@Injectable({
  providedIn: 'root'
})
export class VehicleAllResService implements Resolve<VehicleAllInfo> {

  constructor(private http: HttpSrvService, private vehicleSrv: VehicleSrvService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const pk = route.paramMap.get('id');
    if (this.vehicleSrv.vehicleAllInfo) {
      if (this.vehicleSrv.vehicleAllInfo.id.toString() === pk) {
        // if same pk stored in vehicle service, get data from service
        console.log('local')
        return of(this.vehicleSrv.vehicleAllInfo);
      }
    }
    console.log('server')
    // get data from server
    return this.http.httpGet('/vehicles/vehicle_detail/' + pk);
  }
}

export class VehicleAllListResService implements Resolve<VehicleAllInfo> {

  constructor(private http: HttpSrvService, private vehicleSrv: VehicleSrvService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const pk = route.paramMap.get('id');
    if (this.vehicleSrv.vehicleAllInfo) {
      if (this.vehicleSrv.vehicleAllInfo.id.toString() === pk) {
        // if same pk stored in vehicle service, get data from service
        console.log('local')
        return of(this.vehicleSrv.vehicleAllInfo);
      }
    }
    console.log('server')
    // get data from server
    return this.http.httpGet('/vehicles/vehicle_detail/' + pk);
  }
}
