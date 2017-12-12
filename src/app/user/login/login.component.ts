import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  test: Date = new Date();
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  
    login(formValues) {
      this.authService.loginUser(formValues.userName, formValues.password);
      this.router.navigate(['projects']);
    }
  
    cancel() {
      this.router.navigate(['projects']);
    }

}
