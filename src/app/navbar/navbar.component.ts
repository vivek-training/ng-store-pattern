import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  login$: Observable<boolean>;

  constructor(private authService: AuthService) {
    this.login$ = this.authService.loginStatus$;
  }

  ngOnInit() {}
}
