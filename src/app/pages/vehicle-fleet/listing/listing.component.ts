import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router} from '@angular/router';
import {VehicleSrvService} from '../../../services/vehicle-srv.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {HttpSrvService} from '../../../services/http-srv.service';

export interface UserData {
  id: number;
  license_no: string;
  unit: string;
  vehicle_class: string;
  vin: string;
}

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  displayedColumns: string[] = ['id', 'Unit#', 'VIN#', 'License#', 'Class', 'Edit'];
  dataSource: MatTableDataSource<UserData>;
  pageOption = [1, 10, 25, 100];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private router: Router, private route: ActivatedRoute,
              private vehicleSrv: VehicleSrvService, private http: HttpSrvService
              ) {
  }

   ngOnInit() {
    this.getVehicles();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageOption = setPageSizeOptionsInput.split(',').map(str => +str);
  }
  newVehicle() {
    this.vehicleSrv.vehicleId = null;
    this.vehicleSrv.serviceInfo  = null;
    this.vehicleSrv.generalInfo = null;
    this.vehicleSrv.iDsInfo = null;
    this.vehicleSrv.newVehicle = true;
    this.router.navigate(['/new_vehicle/ids']);
  }
  getVehicles() {
    this.http.httpGet('/vehicles/vehicle_list/').subscribe(
      (data: UserData[]) => {
        console.log(data)
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error) => {
        console.log(error);
      });
  }
  edit(vehicle_id: number) {
    this.vehicleSrv.vehicleId = vehicle_id;
    this.vehicleSrv.newVehicle = false;
    this.router.navigate(['/new_vehicle/ids']);
  }
}
