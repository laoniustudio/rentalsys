import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {GeneralComponent} from "../pages/vehicle-fleet/new-edit-vehicle/general/general.component";
import {ServiceComponent} from "../pages/vehicle-fleet/new-edit-vehicle/service/service.component";
import {FinanceComponent} from "../pages/vehicle-fleet/new-edit-vehicle/finance/finance.component";
import {ListingComponent} from "../pages/vehicle-fleet/listing/listing.component";
import {NewEditVehicleComponent} from '../pages/vehicle-fleet/new-edit-vehicle/new-edit-vehicle.component';
import {DashboardComponent} from '../pages/dashboard/dashboard.component';
import {VehicleIdComponent} from '../pages/vehicle-fleet/new-edit-vehicle/vehicle-id/vehicle-id.component';
import {NewVehicleGuard} from "../utility/guards/guards.guard";
import {VehicleAllResService} from "../services/vehicle/vehicle-res.service";

const appRoutes: Routes = [
  { path: '', component: ListingComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'vehicleListing', component: ListingComponent},
  { path: 'vehicle', children: [
    { path: 'new', component: NewEditVehicleComponent, children: [
      { path: 'ids', component: VehicleIdComponent},
      { path: 'general', component: GeneralComponent, canActivate: [NewVehicleGuard]},
      { path: 'service', component: ServiceComponent, canActivate: [NewVehicleGuard]},
      { path: 'finance', component: FinanceComponent, canActivate: [NewVehicleGuard]},
    ]},
    { path: 'edit', component: NewEditVehicleComponent, children: [
      { path: 'ids', component: VehicleIdComponent, resolve: {vehicleAll: VehicleAllResService}},
      { path: 'general', component: GeneralComponent},
      { path: 'service', component: ServiceComponent},
      { path: 'finance', component: FinanceComponent},
    ]},
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
  providers: [NewVehicleGuard],
  declarations: []
})
export class SjrouterModule { }
