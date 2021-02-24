import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms'  ;
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadercompComponent } from './common/header/header.component';
import { FootercompComponent } from './common/footer/footer.component';
import { FormcompComponent } from './home/form/form.component';
import { ImgcompComponent } from './home/imgcomp/imgcomp.component';
import { DashComponent } from './other/dash/dash.component';
import { AboutComponent } from './other/about/about.component';
import { HomeComponent } from './home/home/home.component';
import { GitHubService } from './services/github.service';
import { Post } from './services/person/person.component';
import { appRoutes } from './routes';

import { SignUpComponent } from './authenticate/sign-up/sign-up.component';
import { SignInComponent } from './authenticate/sign-in/sign-in.component';
import { UserComponent } from './authenticate/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadercompComponent,
    FootercompComponent,
    FormcompComponent,
    ImgcompComponent,
    DashComponent,
    AboutComponent,
    HomeComponent,
    Post.PersonComponent,
    
    SignUpComponent,
    SignInComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule, 
    HttpClientModule,
  ],

  bootstrap: [AppComponent],
  providers: [GitHubService]
  // const routes: Routes = []
})
export class AppModule { }
