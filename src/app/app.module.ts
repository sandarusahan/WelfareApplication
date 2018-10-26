import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/header/header.component';
import { SidebarComponent } from './Layout/sidebar/sidebar.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { ContentComponent } from './Layout/content/content.component';
import { NewEventComponent } from './new-event/new-event.component';
import { AppRoutingModule } from './app-routing.module';
import { RegParticipateComponent } from './reg-participate/reg-participate.component';
import { FormsModule }   from '@angular/forms';
import { SeatingLayoutComponent } from './seating-layout/seating-layout.component';
import { NumberToArrayPipe } from './number-to-array.pipe';
import { RegHotelComponent } from './reg-hotel/reg-hotel.component';
import { RegVehicleComponent } from './reg-vehicle/reg-vehicle.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    NewEventComponent,
    RegParticipateComponent,
    SeatingLayoutComponent,
    NumberToArrayPipe,
    RegHotelComponent,
    RegVehicleComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
