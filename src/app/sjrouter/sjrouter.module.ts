import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {GeneralComponent} from "../pages/vehicle-fleet/general/general.component";
import {ServiceComponent} from "../pages/vehicle-fleet/service/service.component";
import {FinanceComponent} from "../pages/vehicle-fleet/finance/finance.component";
import {ListingComponent} from "../pages/vehicle-fleet/listing/listing.component";
import {NewVehicleComponent} from '../pages/vehicle-fleet/new-vehicle/new-vehicle.component';
import {DashboardComponent} from '../pages/dashboard/dashboard.component';
import {VehicleIdComponent} from '../pages/vehicle-fleet/vehicle-id/vehicle-id.component';

const appRoutes: Routes = [
  { path: '', component: ListingComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'vehicleListing', component: ListingComponent},
  { path: 'new_vehicle', component: NewVehicleComponent,
    children: [
      { path: 'ids', component: VehicleIdComponent},
      { path: 'general', component: GeneralComponent },
      { path: 'service', component: ServiceComponent },
      { path: 'finance', component: FinanceComponent },
    ]},
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule,

  ],
  declarations: []
})
export class SjrouterModule { }
