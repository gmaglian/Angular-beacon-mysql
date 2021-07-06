import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddBeaconComponent } from './components/add-beacon/add-beacon.component';
import { BeaconEditComponent } from './components/beacon-edit/beacon-edit.component';
import { BeaconsListComponent } from './components/beacons-list/beacons-list.component';
import { AddLocalityComponent } from './components/add-locality/add-locality.component';
import { LocalitiesListComponent } from './components/localities-list/localities-list.component';
import { LocalityEditComponent } from './components/locality-edit/locality-edit.component';
import { AddTheaterComponent } from './components/add-theater/add-theater.component';
import { TheatersListComponent } from './components/theaters-list/theaters-list.component';
import { TheaterEditComponent } from './components/theater-edit/theater-edit.component';
import { AddAreaComponent } from './components/add-area/add-area.component';
import { AreasListComponent } from './components/areas-list/areas-list.component';
import { AreaEditComponent } from './components/area-edit/area-edit.component';
import { AddPointComponent } from './components/add-point/add-point.component';
import { PointsListComponent } from './components/points-list/points-list.component';
import { PointEditComponent } from './components/point-edit/point-edit.component';
import { ContextListComponent } from './components/context-list/context-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GestureListComponent } from './components/gestures-list/gestures-list.component';
import { GestureEditComponent } from './components/gesture-edit/gesture-edit.component';
import { UserDeviceIdListComponent } from './components/userdeviceid-list/userdeviceid-list.component';
import { AddUserDeviceIdComponent } from './components/add-userdeviceid/add-userdeviceid.component';


@NgModule({
  declarations: [
    AppComponent,
    BeaconsListComponent,
    AddBeaconComponent,
    BeaconEditComponent,
    AddLocalityComponent,
    LocalitiesListComponent,
    LocalityEditComponent,
    AddTheaterComponent,
    TheatersListComponent,
    TheaterEditComponent,
    AddAreaComponent,
    AreasListComponent,
    AreaEditComponent,
    AddPointComponent,
    PointsListComponent,
    PointEditComponent,
    ContextListComponent,
    GestureListComponent,
    GestureEditComponent,
    UserDeviceIdListComponent,
    AddUserDeviceIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
