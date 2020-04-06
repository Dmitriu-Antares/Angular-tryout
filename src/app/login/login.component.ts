import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login.service'
import { subscribeOn } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  constructor(public AuthService: AuthService) { }

  ngOnInit() {
  }

  login(e) {
    this.AuthService.login()
  }
}
