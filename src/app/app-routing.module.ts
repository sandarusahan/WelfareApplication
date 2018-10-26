import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewEventComponent } from './new-event/new-event.component';
import { ContentComponent } from './Layout/content/content.component';
import { RegParticipateComponent } from './reg-participate/reg-participate.component';
import { SeatingLayoutComponent } from './seating-layout/seating-layout.component';
import { RegHotelComponent } from './reg-hotel/reg-hotel.component';
import { RegVehicleComponent } from './reg-vehicle/reg-vehicle.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component: ContentComponent},
  {path: 'NewEvent', component: NewEventComponent},
  {path: 'RegParticipants', component: RegParticipateComponent},
  {path: 'SeatingLayout', component: SeatingLayoutComponent},
  {path: 'RegHotel', component: RegHotelComponent},
  {path: 'RegVehicle', component: RegVehicleComponent},
  {path: 'Login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
