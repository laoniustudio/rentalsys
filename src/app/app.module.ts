import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LeftNavComponent } from './comps/left-nav/left-nav.component';
import { TopNavComponent } from './comps/top-nav/top-nav.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ListingComponent } from './pages/vehicle-fleet/listing/listing.component';
import {HttpClientModule} from '@angular/common/http';
import {RouteReuseStrategy} from '@angular/router';
import {SJReuseStrategy} from './sjrouter/SJReuseStrategy';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSortModule} from '@angular/material/sort';
import { CompsVehicleIdComponent } from './comps/vehicles/id/comps-vehicle-id.component';
import { CompsVehicleGeneralComponent } from './comps/vehicles/general/comps-vehicle-general.component';
import { CompsVehicleServiceComponent } from './comps/vehicles/service/comps-vehicle-service.component';
import { EditVehicleIdComponent } from './pages/vehicle-fleet/new-edit/edit-vehicle/edit-vehicle-id/edit-vehicle-id.component';
import { EditVehicleGeneralComponent } from './pages/vehicle-fleet/new-edit/edit-vehicle/edit-vehicle-general/edit-vehicle-general.component';
import { EditVehicleServiceComponent } from './pages/vehicle-fleet/new-edit/edit-vehicle/edit-vehicle-service/edit-vehicle-service.component';
import {GeneralComponent} from './pages/vehicle-fleet/new-edit/new-vehicle/general/general.component';
import {ServiceComponent} from './pages/vehicle-fleet/new-edit/new-vehicle/service/service.component';
import {VehicleIdComponent} from './pages/vehicle-fleet/new-edit/new-vehicle/vehicle-id/vehicle-id.component';
import {SjrouterModule} from './sjrouter/sjrouter.module';
import {VehicleAllResService} from './services/vehicle/vehicle-res.service';
import { SubmenuComponent } from './comps/vehicles/submenu/submenu.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LeftNavComponent,
    TopNavComponent,
    GeneralComponent,
    ServiceComponent,
    ListingComponent,
    VehicleIdComponent,
    CompsVehicleIdComponent,
    CompsVehicleGeneralComponent,
    CompsVehicleServiceComponent,
    EditVehicleIdComponent,
    EditVehicleGeneralComponent,
    EditVehicleServiceComponent,
    SubmenuComponent
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
  providers: [ { provide: RouteReuseStrategy, useClass: SJReuseStrategy },
              VehicleAllResService],
  bootstrap: [AppComponent]
})
export class AppModule { }
