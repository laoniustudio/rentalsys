import { Injectable } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router} from '@angular/router';
import {HttpSrvService} from '../http-srv.service';
import {GeneralInfo, ServiceInfo, VehicleIdInfo} from '../../utility/interfaces/vehicles';
import {Subject} from 'rxjs';

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
  newVehicle: boolean; // flag to create a new vehicle or edit the old one
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
  createOrUpdate(createUrl: string, updateUrl: string, payload: {}) {
    if (this.newVehicle) {
      return this.http.httpPost(createUrl, payload);
    } else {
      return this.http.httpPut(updateUrl + this.iDsInfo.pk, payload);
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
