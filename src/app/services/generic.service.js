var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
export var GenericService = (function () {
    function GenericService() {
        this.keywordsUrl = 'http://127.0.0.1:8080/sandbox/api/keywords/';
        this.incidentsUrl = 'http://127.0.0.1:8080/sandbox/api/incidents/';
    }
    GenericService.prototype.getKeywordsUrl = function () {
        return this.keywordsUrl;
    };
    GenericService.prototype.getIncidentsUrl = function () {
        return this.incidentsUrl;
    };
    GenericService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], GenericService);
    return GenericService;
}());
//# sourceMappingURL=generic.service.js.map