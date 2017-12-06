import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';


import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { Error404Component } from './errors/404.component';

import {
  ProjectsListComponent,
  ProjectThumbnailComponent,
  ProjectService,
  ProjectDetailsComponent
} from './projects/index';
import { ProjectCreateComponent } from './projects/project-create/project-create.component';


@NgModule({
  declarations: [
    AppComponent, 
    NavbarComponent, 
    LandingComponent, 
    FooterComponent, 
    SignupComponent, 
    ContactusComponent, 
    ProjectsListComponent,
    ProjectThumbnailComponent,
    Error404Component,
    ProjectDetailsComponent,
    ProjectCreateComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
