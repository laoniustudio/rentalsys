import { Injectable } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {VehicleAllInfo} from '../../utility/interfaces/vehicles';
import {Observable} from 'rxjs';
import {HttpSrvService} from "../http-srv.service";

@Injectable({
  providedIn: 'root'
})
export class VehicleAllResService implements Resolve<VehicleAllInfo> {

  constructor(private activedRoute: ActivatedRoute, private http: HttpSrvService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<VehicleAllInfo> {
    this.activedRoute.queryParams.subscribe(
      (params) => {
        if (params['id']) {
          return this.http.httpGet('/vehicles/vehicle_detail/' + params['id']);
        }
      });
  }
}
