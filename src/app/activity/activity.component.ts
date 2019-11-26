import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  login$: Observable<boolean>;

  constructor(private authService: AuthService) {
    this.login$ = this.authService.loginStatus$;
  }

  ngOnInit() {}
}
