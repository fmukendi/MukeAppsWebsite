import { AuthService } from './auth.service';
import { AppErrorHandler } from './../errors/model/app-error-handler';
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { userRoutes } from './user.routes';

import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations:
  [ 
      LoginComponent, 
      ProfileComponent, 
      AdminComponent
  ], providers: [
    
          { 
            provide: ErrorHandler , // replace angular error handler with below 
            useClass : AppErrorHandler // angular error only console.log ... 
                                       // with this one , we can do more
                                       // I thing it will be only for this module
          },
          AuthService
      ]
})
export class UserModule { }
