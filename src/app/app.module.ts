import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LeftNavComponent } from './comps/left-nav/left-nav.component';
import { TopNavComponent } from './comps/top-nav/top-nav.component';
import {SjrouterModule} from "./sjrouter/sjrouter.module";
import { GeneralComponent } from './pages/vehicle-fleet/general/general.component';
import { ServiceComponent } from './pages/vehicle-fleet/service/service.component';
import { FinanceComponent } from './pages/vehicle-fleet/finance/finance.component';
import {FormsModule} from "@angular/forms";
import { ListingComponent } from './pages/vehicle-fleet/listing/listing.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LeftNavComponent,
    TopNavComponent,
    GeneralComponent,
    ServiceComponent,
    FinanceComponent,
    ListingComponent
  ],
  imports: [
    BrowserModule,
    SjrouterModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
