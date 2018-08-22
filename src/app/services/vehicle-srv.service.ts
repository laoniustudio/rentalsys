import { Injectable } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router} from '@angular/router';
import {HttpSrvService} from './http-srv.service';
import {GeneralInfo, ServiceInfo, VehicleIdInfo} from '../utility/interfaces/vehicles';

@Injectable({
  providedIn: 'root'
})
export class VehicleSrvService {
  vehicleId: number; // the id or pk of the verhicle, get from save ids to model
  iDsInfo: VehicleIdInfo; // local IDs
  generalInfo: GeneralInfo; // local general
  serviceInfo: ServiceInfo; // local service
  newVehicle: boolean; // flag to create a new vehicle or edit the old one
  constructor(private router: Router, private route: ActivatedRoute,
              private http: HttpSrvService) { }

  toGeneral() {
    this.router.navigate(['/new_vehicle/general']);
  }

  getEditOrNewUrl(newUrl: string, editUrl: string, payload: {}) {
    if (this.newVehicle) {
      return this.http.httpPost(newUrl, payload);
    } else {
      return this.http.httpPut(editUrl + this.vehicleId, payload);
    }
  }
}
