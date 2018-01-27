import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  test: Date = new Date();
  email: String;
  password: String;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  
    login(formValues) {
      this.authService.loginUser(formValues.email, formValues.password);
      this.router.navigate(['projects']);
    }
  
    cancel() {
      this.router.navigate(['projects']);
    }

}
