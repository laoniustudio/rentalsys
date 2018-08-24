import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from '../pages/dashboard/dashboard.component';
import {EditVehicleIdComponent} from '../pages/vehicle-fleet/new-edit/edit-vehicle/edit-vehicle-id/edit-vehicle-id.component';
import {EditVehicleGeneralComponent} from '../pages/vehicle-fleet/new-edit/edit-vehicle/edit-vehicle-general/edit-vehicle-general.component';
import {EditVehicleServiceComponent} from '../pages/vehicle-fleet/new-edit/edit-vehicle/edit-vehicle-service/edit-vehicle-service.component';
import {VehicleIdComponent} from '../pages/vehicle-fleet/new-edit/new-vehicle/vehicle-id/vehicle-id.component';
import {GeneralComponent} from '../pages/vehicle-fleet/new-edit/new-vehicle/general/general.component';
import {ServiceComponent} from '../pages/vehicle-fleet/new-edit/new-vehicle/service/service.component';
import {NewVehicleGuard} from '../utility/guards/guards.guard';
import {VehicleAllResService} from '../services/vehicle/vehicle-res.service';
import {RouterModule, Routes} from '@angular/router';
import {ListingComponent} from '../pages/vehicle-fleet/listing/listing.component';
import {SubmenuComponent} from '../comps/vehicles/submenu/submenu.component';

const appRoutes: Routes = [
  { path: '', component: ListingComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'vehicleListing', component: ListingComponent},
  { path: 'vehicle', children: [
    { path: 'new', component: SubmenuComponent, children: [
      { path: 'ids', component: VehicleIdComponent},
      { path: 'general', component: GeneralComponent, canActivate: [NewVehicleGuard]},
      { path: 'service', component: ServiceComponent, canActivate: [NewVehicleGuard]},
    ]},
    { path: 'edit', component: SubmenuComponent, children: [
      { path: 'ids/:id', component: EditVehicleIdComponent, resolve: {vehicleAll: VehicleAllResService}},
      { path: 'general/:id', component: EditVehicleGeneralComponent},
      { path: 'service/:id', component: EditVehicleServiceComponent},
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
