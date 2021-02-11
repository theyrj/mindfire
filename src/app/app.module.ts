import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadercompComponent } from './headercomp/headercomp.component';
import { FootercompComponent } from './footercomp/footercomp.component';
import { FormcompComponent } from './formcomp/formcomp.component';
import { ImgcompComponent } from './imgcomp/imgcomp.component';
import { DashComponent } from './dash/dash.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadercompComponent,
    FootercompComponent,
    FormcompComponent,
    ImgcompComponent,
    DashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
