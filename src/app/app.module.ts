import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DestinationPageComponent } from './pages/destination-page/destination-page.component';
import { CrewPageComponent } from './pages/crew-page/crew-page.component';
import { TechnologyPageComponent } from './pages/technology-page/technology-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    DestinationPageComponent,
    CrewPageComponent,
    TechnologyPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
