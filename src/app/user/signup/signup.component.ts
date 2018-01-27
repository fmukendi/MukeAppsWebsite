import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  test: Date = new Date();
  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }

  signUp(formValues , form) {
    if (formValues.password1 !== formValues.password2 ) {
      this.toastr.error('App Message', 'Passwords are not the same!');

    } else if (form.valid === false) {
      this.toastr.error('App Message', 'The form is not valid!');
    } else {
      this.toastr.success('App Message', 'Successfully registered.');
      this.authService.loginUser(formValues.email, formValues.password);
      this.router.navigate(['projects']);
    }
  }

}
