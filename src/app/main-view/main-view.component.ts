import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login.service'
import { FormService } from '../form/form.service'

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.sass']
})
export class MainViewComponent implements OnInit {

  constructor(private FormService:FormService, private AuthService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.AuthService.logout()
  }
}
