import { Component, OnInit } from '@angular/core';
import {HttpSrvService} from '../../../services/http-srv.service';
import {ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router} from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-new-vehicle',
  templateUrl: './new-vehicle.component.html',
  styleUrls: ['./new-vehicle.component.css']
})
export class NewVehicleComponent implements OnInit {
  constructor(private router: Router, private http: HttpSrvService) { }

  ngOnInit() {
    this.setNavToggle();
  }
  setNavToggle() {
     this.router.events.subscribe((event) => {
          if (event instanceof NavigationEnd ) {
              // change body background color: for user's backend will be light grey
              switch (event.url) {
                case '/new_vehicle/ids': {
                  this.classToggle('#pills-1-tab', '#pills-2-tab', '#pills-3-tab', 'active show');
                  break;
                }
                case '/new_vehicle/general': {
                  this.classToggle('#pills-2-tab', '#pills-1-tab', '#pills-3-tab', 'active show');

                  break;
                }
                case '/new_vehicle/service': {
                  this.classToggle('#pills-3-tab', '#pills-2-tab', '#pills-1-tab', 'active show');
                  break;
                }
              }
          }
      });
  }
  classToggle(add: string, remove1: string, remove2: string, className: string) {
    $(add).addClass(className);
    $(remove1).removeClass(className);
    $(remove2).removeClass(className);
  }
}
