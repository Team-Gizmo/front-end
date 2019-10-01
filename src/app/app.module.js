var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
import { HomeComponent } from './components/home/home.component';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            imports: [
                BrowserModule,
                FormsModule,
                HttpModule,
                AgGridModule.withComponents([RedComponent]),
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
                RedComponent
            ],
            providers: [KeywordService, GenericService, IncidentService],
            bootstrap: [AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map