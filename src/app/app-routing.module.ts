import { SignInComponent } from './authenticate/sign-in/sign-in.component';
import { HomeComponent } from './home/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './other/dash/dash.component';
import { AboutComponent } from './other/about/about.component';

const routes: Routes = [{path: 'dash',component:DashComponent}, 
{path: 'about',component:AboutComponent},
{path: 'home', component:HomeComponent};
{path:'sign-in',component:SignInComponent}

{
  path: 'signup', component: UserComponent,
  children: [{ path: '', component: SignUpComponent }]
},
{
  path: 'login', component: UserComponent,
  children: [{ path: '', component: SignInComponent }]
},
{ path : '', redirectTo:'/login', pathMatch : 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashComponent, AboutComponent]
