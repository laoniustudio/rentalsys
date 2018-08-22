import { Component, OnInit } from '@angular/core';
import {HttpSrvService} from '../../../services/http-srv.service';
import {ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router} from '@angular/router';
import {GeneralSrvService} from '../../../services/general-srv.service';
declare var $: any;
@Component({
  selector: 'app-new-vehicle',
  templateUrl: './new-vehicle.component.html',
  styleUrls: ['./new-vehicle.component.css']
})
export class NewVehicleComponent implements OnInit {
  constructor(private router: Router, private http: HttpSrvService,
              private gSrv: GeneralSrvService) { }

  ngOnInit() {
    this.setNavToggle();
  }
  setNavToggle() {
     this.router.events.subscribe((event) => {
          if (event instanceof NavigationEnd ) {
              switch (event.url) {
                case '/new_vehicle/ids': {
                  this.gSrv.classToggle('#pills-1-tab', ['#pills-2-tab', '#pills-3-tab'], 'active show');
                  break;
                }
                case '/new_vehicle/general': {
                  this.gSrv.classToggle('#pills-2-tab', ['#pills-1-tab', '#pills-3-tab'], 'active show');

                  break;
                }
                case '/new_vehicle/service': {
                  this.gSrv.classToggle('#pills-3-tab', ['#pills-2-tab', '#pills-1-tab'], 'active show');
                  break;
                }
              }
          }
      });
  }

}
