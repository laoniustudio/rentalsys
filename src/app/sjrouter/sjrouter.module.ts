import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "../app.component";
import {GeneralComponent} from "../pages/vehicle-fleet/general/general.component";
import {ServiceComponent} from "../pages/vehicle-fleet/service/service.component";
import {FinanceComponent} from "../pages/vehicle-fleet/finance/finance.component";
import {DashboardComponent} from "../pages/dashboard/dashboard.component";
import {ListingComponent} from "../pages/vehicle-fleet/listing/listing.component";

const appRoutes: Routes = [
  { path: '', component: ListingComponent},
  { path: 'vehicle_fleet',
    children: [
      { path: 'vehicles', component: ListingComponent },
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
