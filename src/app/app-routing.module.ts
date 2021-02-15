import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [{path: 'dash', component:DashComponent}, 
{path: 'about',component:AboutComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashComponent, AboutComponent]