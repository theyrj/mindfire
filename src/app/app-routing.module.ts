import { HomeComponent } from './home/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './other/dash/dash.component';
import { AboutComponent } from './other/about/about.component';

const routes: Routes = [{path: 'dash',component:DashComponent}, 
{path: 'about',component:AboutComponent},
{path: 'home', component:HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashComponent, AboutComponent]