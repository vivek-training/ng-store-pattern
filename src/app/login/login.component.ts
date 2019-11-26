import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login$: Observable<boolean>;
  constructor(private authService: AuthService) {
    this.login$ = this.authService.loginStatus$;
  }

  ngOnInit() {}

  toggleHandler(label: string) {
    if (label === 'login') {
      this.authService.login();
    } else {
      this.authService.logout();
    }
  }
}
