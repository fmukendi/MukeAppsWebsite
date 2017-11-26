import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { SignupComponent } from './signup/signup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProjectsListComponent } from './projects/projects-list.component';
import { Error404Component } from './errors/404.component';

const routes: Routes =
[
    { path: 'landing', component: LandingComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'contactus', component: ContactusComponent },
    { path: 'projects', component: ProjectsListComponent },
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: '**', component: Error404Component }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
