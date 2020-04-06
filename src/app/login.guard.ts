import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './login.service';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private AuthService: AuthService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(this.AuthService.isLoggedIn())
    if(!this.AuthService.isLoggedIn()) this.router.navigate(['login'])  
    return this.AuthService.isLoggedIn()
  }
  
}
