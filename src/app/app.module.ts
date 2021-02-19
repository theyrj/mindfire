import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms'  ;
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadercompComponent } from './headercomp/headercomp.component';
import { FootercompComponent } from './footercomp/footercomp.component';
import { FormcompComponent } from './formcomp/formcomp.component';
import { ImgcompComponent } from './imgcomp/imgcomp.component';
import { DashComponent } from './dash/dash.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { GitHubService } from './github.service';
import { Post } from './post.person/post.person.component';

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
    Post.PersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot(routes),
    FormsModule, 
    HttpClientModule,
  ],

  bootstrap: [AppComponent],
  providers: [GitHubService]
  // const routes: Routes = []
})
export class AppModule { }
