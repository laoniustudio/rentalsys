import { Injectable } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router} from '@angular/router';
import {HttpSrvService} from '../http-srv.service';
import {GeneralInfo, ServiceInfo, VehicleIdInfo} from '../../utility/interfaces/vehicles';
import {Observable, Subject} from 'rxjs';
import {isUndefined} from "util";

@Injectable({
  providedIn: 'root'
})
export class VehicleSrvService {
  // local data info
  iDsInfo: VehicleIdInfo ;
  generalInfo: GeneralInfo;
  serviceInfo: ServiceInfo;
  // --------------
  switchStyle = new Subject<any>();
  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              private http: HttpSrvService) { }

  toGeneral() {
    this.router.navigate(['/new_vehicle/general']);
  }
  isNewVehicleSub() {
    return this.activatedRoute.queryParams;
  }
  /**
   * post new or update vehicle info to server
   * */
  createOrUpdate(newVehicle: boolean, url: string, payload: {}) {
      if (newVehicle) {
        return this.http.httpPost(url, payload);
      } else {
        return this.http.httpPut(url + this.iDsInfo.id, payload);
      }
  }
  fetchVehicleAllInfo() {
    this.http.httpGet('/vehicles/vehicle_detail/11') {

    }
  }
  /**
   * Clear all infos saved
   * */
  clearAllInfos() {
    this.iDsInfo = undefined;
    this.generalInfo = undefined;
    this.serviceInfo = undefined;
  }
  /**
   * add switch style to the tab selection style
   * */
  emitSwitchStyle() {
    this.switchStyle.next();
  }
  switchStyleSub() {
    return this.switchStyle.asObservable();
  }
}
