import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {VehicleSrvService} from '../../../services/vehicle/vehicle-srv.service';
import {GeneralSrvService} from '../../../services/general-srv.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})
export class SubmenuComponent implements OnInit, AfterContentChecked{
  pk: string = this.activeRoute.snapshot.paramMap.get('id'); // vehicle pk
  constructor(private vehicleSrv: VehicleSrvService, private gSrv: GeneralSrvService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.vehicleSrv.switchStyleSub().subscribe(
      () => {
          this.gSrv.selectStyleSwitch('.nav-link', 'active show', 'active show');
      }
    );
  }
  ngAfterContentChecked() {
    console.log(this.activeRoute.snapshot.paramMap.get('id'))
  }

}
