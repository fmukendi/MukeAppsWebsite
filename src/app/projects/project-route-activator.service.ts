

import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { ProjectService } from './shared/project.service';

@Injectable()
export class ProjectRouteActivator implements CanActivate {
    errorMessage: string;
    constructor(private _projectService: ProjectService, private router: Router ) {

    }

    canActivate(route: ActivatedRouteSnapshot) {
       

        return this._projectService.getEvent(+route.params['id'])
                    .map( e => {
                        if (e) {
                            return true;
                        }else {
                            this.router.navigate(['/404']);
                        }
                    },
                    error => this.errorMessage = <any>error);
    }
}
