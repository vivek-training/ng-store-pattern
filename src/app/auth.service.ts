import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authSubject = new BehaviorSubject<boolean>(false);

  loginStatus$ = this.authSubject.asObservable();

  constructor() {}

  login() {
    this.authSubject.next(true);
  }

  logout() {
    this.authSubject.next(false);
  }
}
