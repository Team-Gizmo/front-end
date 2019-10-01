import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular/main';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './components/application/app.component';
import { IncidentGridComponent } from './components/incident/grid.component';
import { KeywordGridComponent } from './components/keyword/grid.component';
import { RedComponent } from './components/common/red.component';
import { NewIncidentComponent } from './components/incident/new-incident.component';
import { NewKeywordComponent } from './components/keyword/new-keyword.component';
import { SearchIncidentComponent } from './components/incident/search-incident.component';
import { FooterComponent } from './components/footer/footer.component';
import { IncidentService } from './services/incident.service';
import { KeywordService } from './services/keyword.service';
import { GenericService } from './services/generic.service';
import { AlertService } from './services/alert.service';
import { HomeComponent } from './components/home/home.component';
import { IncidentKeywordGridComponent } from './components/incident/incident-keyword.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgGridModule.withComponents(
      [RedComponent]
    ),
    AppRoutingModule,
    ReactiveFormsModule,
    MultiselectDropdownModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NewIncidentComponent,
    NewKeywordComponent,
    SearchIncidentComponent,
    IncidentGridComponent,
    KeywordGridComponent,
    FooterComponent,
    RedComponent,
    IncidentKeywordGridComponent
  ],
  providers: [ KeywordService, GenericService, IncidentService, AlertService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
