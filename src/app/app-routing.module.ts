import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { IncidentGridComponent } from './components/incident/grid.component';
import { KeywordGridComponent } from './components/keyword/grid.component';
import { NewIncidentComponent } from './components/incident/new-incident.component';
import { NewKeywordComponent } from './components/keyword/new-keyword.component';
import { SearchIncidentComponent } from './components/incident/search-incident.component';
import {IncidentKeywordGridComponent} from "./components/incident/incident-keyword.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',       component: HomeComponent },
  { path: 'keywords',   component: KeywordGridComponent },
  { path: 'incidents',  component: IncidentGridComponent },
  { path: 'incident',   component: NewIncidentComponent },
  { path: 'search',     component: SearchIncidentComponent },
  { path: 'keyword',    component: NewKeywordComponent },
  { path: 'incidentKeyword',    component: IncidentKeywordGridComponent },
  { path: 'login',    component: LoginComponent },
  { path: 'register',    component: RegisterComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
