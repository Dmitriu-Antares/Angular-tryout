import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { LoginGuard } from './login.guard'

import { AuthService } from './login.service';
import { FormService } from './form/form.service';

import { MainViewModule } from './main-view/main-view.module'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MainViewModule,
  ],
  providers: [
    LoginGuard,
    AuthService,
    FormService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
