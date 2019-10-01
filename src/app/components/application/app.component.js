var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
export var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Component({
            moduleId: module.id,
            selector: 'inc-app',
            template: "\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" routerLink=\"/home\" routerLinkActive=\"active\">INC Tracker</a>\n    </div>\n    <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li><a routerLink=\"/incidents\" routerLinkActive=\"active\">Incidents</a></li>\n        <li><a routerLink=\"/incident\" routerLinkActive=\"active\">New Incident</a></li>\n        <li><a routerLink=\"/keywords\" routerLinkActive=\"active\">Keywords</a></li>\n        <li><a routerLink=\"/keyword\" routerLinkActive=\"active\">New Keyword</a></li>\n        <li><a routerLink=\"/search\" routerLinkActive=\"active\">Search</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n    <br><br><br>\n<router-outlet></router-outlet>\n  ",
            styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map