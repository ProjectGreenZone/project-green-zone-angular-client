import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { MapComponent } from './views/map/map.component';
import { TrackerListComponent } from './views/tracker-list/tracker-list.component';
import { TrackerComponent } from './views/tracker/tracker.component';
import { TrackerAddComponent } from './views/tracker-add/tracker-add.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';



const routes: Routes = [
  {path: '',   redirectTo: '/map', pathMatch: 'full' },
  {path: 'map', component: MapComponent, canActivate: [AuthGuard]},
  {path: 'trackers', component: TrackerListComponent, canActivate: [AuthGuard]},
  {path: 'trackers/:id', component: TrackerComponent, canActivate: [AuthGuard]},
  {path: 'tracker_add', component: TrackerAddComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
