import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginGuard } from './login.guard'
import { MainViewComponent } from './main-view/main-view.component'
import { LoginComponent } from './login/login.component'
import { routes as childRoutes } from './main-view/main-view-routing.module'


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    redirectTo: 'home', pathMatch: 'full',
    canActivate: [LoginGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
