import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProjectsListComponent } from './projects/projects-list.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { Error404Component } from './errors/404.component';
import { ProjectCreateComponent } from './projects/project-create/project-create.component';
import { ProjectRouteActivator } from './projects/index';

const routes: Routes =
[
    { path: 'landing', component: LandingComponent },
    { path: 'contactus', component: ContactusComponent },
    { path: 'projects', component: ProjectsListComponent },
    { path: 'project/:id', component: ProjectDetailsComponent, canActivate: [ProjectRouteActivator]},
    { path: 'projectCreate', component: ProjectCreateComponent },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule'},
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: '404', component: Error404Component }
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
