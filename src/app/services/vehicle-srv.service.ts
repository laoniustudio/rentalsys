import { Injectable } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router} from '@angular/router';
import {HttpSrvService} from './http-srv.service';

@Injectable({
  providedIn: 'root'
})
export class VehicleSrvService {
  vehicleId: number; // the id or pk of the verhicle, get from save ids to model
  iDsInfo: {}; // local IDs
  generalInfo: {}; // local general
  serviceInfo: {}; // local service
  newVehicle: boolean; // flag to create a new vehicle or edit the old one
  idSnap: ActivatedRouteSnapshot;
  generalSnap: ActivatedRouteSnapshot;
  serviceSnap: ActivatedRouteSnapshot;
  constructor(private router: Router, private route: ActivatedRoute,
              private http: HttpSrvService) { }

  toGeneral() {
    this.router.navigate(['/new_vehicle/general']);
  }
  setSnapshot() {
    this.router.events.subscribe((event) => {
          if (event instanceof NavigationEnd ) {
              // change body background color: for user's backend will be light grey
              switch (event.url) {
                case '/new_vehicle/ids': {
                  this.idSnap = this.route.snapshot;
                  console.log(1)
                  break;
                }
                case '/new_vehicle/general': {
                  this.generalSnap = this.route.snapshot;
                  console.log(2)
                  break;
                }
                case '/new_vehicle/service': {
                  this.serviceSnap = this.route.snapshot;
                  console.log(3)
                  break;
                }
              }
          }
      });
  }

  getEditOrNewUrl(newUrl: string, editUrl: string, payload: {}) {
    if (this.newVehicle) {
      return this.http.httpPost(newUrl, payload);
    } else {
      return this.http.httpPut(editUrl + this.vehicleId, payload);
    }
  }
}
