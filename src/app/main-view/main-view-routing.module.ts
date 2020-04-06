import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component'
import { FormComponent } from '../form/form.component'
import { FilmsComponent } from '../films/films.component'

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: "full"
  },
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'films',
    component: FilmsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainViewRoutingModule { }
