import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CrewPageComponent } from './pages/crew-page/crew-page.component';
import { DestinationPageComponent } from './pages/destination-page/destination-page.component';
import { TechnologyPageComponent } from './pages/technology-page/technology-page.component';

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "home", component: HomePageComponent },
  { path: "crew", component: CrewPageComponent },
  { path: "destination", component: DestinationPageComponent },
  { path: "technology", component: TechnologyPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
