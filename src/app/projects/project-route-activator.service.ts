

import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { ProjectService } from './shared/project.service';
import { AuthService } from '../user/auth.service';


@Injectable()
export class ProjectRouteActivator implements CanActivate {
    errorMessage: string;
    constructor(private _projectService: ProjectService, 
                private router: Router,
                private auth: AuthService
            ) {

    }

    canActivate(route: ActivatedRouteSnapshot) {
       
        let isUserAuthenticated = this.auth.isAuthenticated();

        if (isUserAuthenticated) {
            return this._projectService.getEvent(+route.params['id'])
            .map( e => {
                if (e) {
                    return true;
                }else {
                    this.router.navigate(['/404']);
                }
            },
            error => this.errorMessage = <any>error);
        }else {
            this.router.navigate(['/404']);
        }

        
    }
}
