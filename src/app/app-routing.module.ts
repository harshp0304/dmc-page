import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './pages/projects/projects.component';
import { HomeComponent } from './pages/home/home.component';
import { PlacesComponent } from './pages/places/places.component';
import { DescriptionComponent } from './pages/description/description.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  { path: "projects", component: ProjectsComponent },
  { path: "places", component: PlacesComponent },
  { path: "description", component: DescriptionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
