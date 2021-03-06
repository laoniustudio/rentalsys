import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {VehicleSrvService} from '../../../services/vehicle/vehicle-srv.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {HttpSrvService} from '../../../services/http-srv.service';
import {VehicleIdInfo} from "../../../utility/interfaces/vehicles";
import {GeneralSrvService} from '../../../services/general-srv.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  // Data Table variables init
  displayedColumns: string[] = ['id', 'Unit#', 'VIN#', 'License#', 'Class', 'Edit'];
  dataSource: MatTableDataSource<VehicleIdInfo>;
  pageOption = [1, 10, 25, 100];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private router: Router, private route: ActivatedRoute,
              private vehicleSrv: VehicleSrvService, private http: HttpSrvService,
              private gSrv: GeneralSrvService
              ) {
  }

   ngOnInit() {
    this.getVehicles();
  }
  /**
   * Data Table Method
   * */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageOption = setPageSizeOptionsInput.split(',').map(str => +str);
  }
  /**
   * Nav to New Vehicle
   * */
  newVehicle() {
    this.router.navigate(['/vehicle/new/ids']);
  }
  /**
   * Get all vehicle infos
   * */
  getVehicles() {
    this.http.httpGet('/vehicles/vehicle_list/').subscribe(
      (data: Array<VehicleIdInfo>) => {
        console.log(data);
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error) => {
        console.log(error);
      });
  }
  /**
   * Edit each vehicle
   * */
  edit(vehicle_pk: number) {
    this.gSrv.loadingStyleToggle();
    this.router.navigate(['/vehicle/edit/ids/' + vehicle_pk], );
  }
}
