import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private roleSubject = new BehaviorSubject<string>('');
  role$ = this.roleSubject.asObservable();

  constructor() {
    // if roleSubject is empty, set the role to 'user'
    if (!this.roleSubject.value) {
      this.roleSubject.next('user');
    }
  }

  setRole(role: string) {
    this.roleSubject.next(role);
  }
}