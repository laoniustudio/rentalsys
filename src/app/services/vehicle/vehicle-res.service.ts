import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {VehicleIdInfo} from '../../utility/interfaces/vehicles';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleEditResService implements Resolve<VehicleIdInfo> {

  constructor() { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<VehicleIdInfo> {
    return
  }
}
