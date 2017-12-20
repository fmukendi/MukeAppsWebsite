import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../user/auth.service';


@Injectable()
export class ProjectsGroupRouteActivator implements CanActivate {
    errorMessage: string;
    constructor( 
                private router: Router,
                private auth: AuthService
            ) {

    }

    canActivate(route: ActivatedRouteSnapshot) {
       
        let isUserAuthenticated = this.auth.isAuthenticated();

        if (isUserAuthenticated) {
            return true;
        }else {
            this.router.navigate(['/404']);
        }

        
    }
}
