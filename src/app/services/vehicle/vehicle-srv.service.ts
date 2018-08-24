import { Injectable } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router} from '@angular/router';
import {HttpSrvService} from '../http-srv.service';
import {GeneralInfo, ServiceInfo, VehicleAllInfo, VehicleIdInfo} from '../../utility/interfaces/vehicles';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleSrvService {
  // local data info
  vehicleAllInfo: VehicleAllInfo;
  // --------------
  switchStyle = new Subject<any>();
  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              private http: HttpSrvService) { }

  toGeneral() {
    this.router.navigate(['/new_vehicle/general']);
  }

  /**
   * post new or update vehicle info to server
   * */
  createOrUpdate(newVehicle: boolean, url: string, id: string, payload: {}) {
      if (newVehicle) {
        return this.http.httpPost(url, payload);
      } else {
        return this.http.httpPut(url + id, payload);
      }
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
