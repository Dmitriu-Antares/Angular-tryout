import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
  export class AuthService {
    constructor(private router: Router){}

    login(): boolean {
        localStorage.setItem('username', 'some');
        this.router.navigate([''])
        return false;
      }
    
      logout(): any {
        localStorage.removeItem('username');
        this.router.navigate(['login'])
        console.log('logout')
      }
    
      getUser(): any {
        return localStorage.getItem('username');
      }
    
      isLoggedIn(): boolean {
        return this.getUser() !== null;
      }
}
