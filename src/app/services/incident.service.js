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
import { Headers, Http, RequestOptions, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment.prod';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
export var IncidentService = (function () {
    function IncidentService(http) {
        this.http = http;
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.backendUrl = environment.backendUrl;
        this.url = this.backendUrl + 'incidents/';
    }
    IncidentService.prototype.getIncidents = function () {
        var url = this.url + "all";
        this.allResults = this.http
            .get(url)
            .map(function (response) { return response.json(); });
        return this.allResults;
    };
    IncidentService.prototype.getIncident = function (id) {
        var url = "" + this.url + id;
        return this.http
            .get(url)
            .map(function (response) { return response.json().data; });
    };
    IncidentService.prototype.create = function (name) {
        return this.http
            .post(this.url, JSON.stringify({ name: name }), { headers: this.headers })
            .map(function (response) { return response.json().data; });
    };
    IncidentService.prototype.newInstance = function (composite) {
        var url = "" + this.url;
        return this.http
            .post(this.url, JSON.stringify(composite), { headers: this.headers })
            .map(function (response) { return response.json().data; });
    };
    IncidentService.prototype.update = function (incident) {
        var url = this.url + "solution/" + incident.id;
        var value = this.http
            .put(url, JSON.stringify(incident), { headers: this.headers })
            .map(function () { return incident; });
        return value;
    };
    IncidentService.prototype.search = function (data) {
        var params = new URLSearchParams();
        for (var key in data) {
            params.set(key, data[key]);
        }
        if (params.paramsMap.size === 0) {
            console.log('No selections made');
            return;
        }
        var options = new RequestOptions({
            search: params
        });
        var url = this.url + "keywordSearch";
        var value = this.http
            .get(url, options)
            .map(function (response) { return response.json(); });
        return value;
    };
    IncidentService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], IncidentService);
    return IncidentService;
}());
//# sourceMappingURL=incident.service.js.map