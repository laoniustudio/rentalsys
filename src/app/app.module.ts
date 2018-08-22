import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LeftNavComponent } from './comps/left-nav/left-nav.component';
import { TopNavComponent } from './comps/top-nav/top-nav.component';
import {SjrouterModule} from "./sjrouter/sjrouter.module";
import { GeneralComponent } from './pages/vehicle-fleet/new-edit-vehicle/general/general.component';
import { ServiceComponent } from './pages/vehicle-fleet/new-edit-vehicle/service/service.component';
import { FinanceComponent } from './pages/vehicle-fleet/new-edit-vehicle/finance/finance.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ListingComponent } from './pages/vehicle-fleet/listing/listing.component';
import { NewEditVehicleComponent } from './pages/vehicle-fleet/new-edit-vehicle/new-edit-vehicle.component';
import {HttpClientModule} from '@angular/common/http';
import { VehicleIdComponent } from './pages/vehicle-fleet/new-edit-vehicle/vehicle-id/vehicle-id.component';
import {RouteReuseStrategy} from '@angular/router';
import {SJReuseStrategy} from './sjrouter/SJReuseStrategy';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSortModule} from '@angular/material/sort';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LeftNavComponent,
    TopNavComponent,
    GeneralComponent,
    ServiceComponent,
    FinanceComponent,
    ListingComponent,
    NewEditVehicleComponent,
    VehicleIdComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    SjrouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [ { provide: RouteReuseStrategy, useClass: SJReuseStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
