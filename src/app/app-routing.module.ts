import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BeaconsListComponent } from './components/beacons-list/beacons-list.component'
import { AddBeaconComponent } from './components/add-beacon/add-beacon.component'
import { LocalitiesListComponent } from './components/localities-list/localities-list.component'
import { AddLocalityComponent } from './components/add-locality/add-locality.component'
import { TheatersListComponent} from './components/theaters-list/theaters-list.component'
import { AddTheaterComponent } from './components/add-theater/add-theater.component'
import { AreasListComponent } from './components/areas-list/areas-list.component'
import { AddAreaComponent } from './components/add-area/add-area.component'
import { PointsListComponent } from './components/points-list/points-list.component'
import { AddPointComponent } from './components/add-point/add-point.component'
import { ContextListComponent } from './components/context-list/context-list.component'
import { GestureListComponent } from './components/gestures-list/gestures-list.component'

const routes: Routes = [
  { path: '', redirectTo: 'beacon', pathMatch: 'full' },
  { path: 'beacon', component: BeaconsListComponent },
  { path: 'add_beacon', component: AddBeaconComponent },
  { path: 'locality', component: LocalitiesListComponent },
  { path: 'add_locality', component: AddLocalityComponent },
  { path: 'theater' , component: TheatersListComponent },
  { path: 'add_theater', component: AddTheaterComponent },
  { path: 'area', component: AreasListComponent },
  { path: 'add_area', component: AddAreaComponent },
  { path: 'point', component:PointsListComponent },
  { path: 'add_point', component:AddPointComponent},
  {path: 'context', component:ContextListComponent},
  {path: 'gesture', component:GestureListComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
