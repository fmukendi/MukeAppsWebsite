import { AuthService } from './user/auth.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { Error404Component } from './errors/404.component';

import {
  ProjectsListComponent,
  ProjectThumbnailComponent,
  ProjectDetailsComponent,
  ProjectService,
  ProjectRouteActivator,
  ProjectsGroupRouteActivator
} from './projects/index';
import { ProjectCreateComponent } from './projects/project-create/project-create.component';

@NgModule({
  declarations: [
    AppComponent, 
    NavbarComponent, 
    LandingComponent, 
    FooterComponent, 
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
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [
    ProjectService,
    ProjectRouteActivator,
    ProjectsGroupRouteActivator,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
