import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewComponent } from '../main-view/main-view.component';
import { FormComponent } from '../form/form.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { FormFieldsComponent } from '../form/form-fields/form-fields.component';
import { FormValuesComponent } from '../form/form-values/form-values.component';
import { FilmsComponent } from '../films/films.component';
import { SearchFilmComponent } from '../films/search-film/search-film.component';
import { FilmListComponent } from '../films/film-list/film-list.component';
import { FilmItemComponent } from '../films/film-item/film-item.component';
import { MainViewRoutingModule } from './main-view-routing.module';


@NgModule({
  declarations: [
    HomePageComponent,
    MainViewComponent,
    FormComponent,
    FormFieldsComponent,
    FormValuesComponent,
    FilmsComponent,
    SearchFilmComponent,
    FilmListComponent,
    FilmItemComponent
  ],
  imports: [
    CommonModule,
    MainViewRoutingModule
  ],
})
export class MainViewModule { }
