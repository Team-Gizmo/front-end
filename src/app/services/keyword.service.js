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
import { Http, Headers } from '@angular/http';
import { environment } from '../../environments/environment.prod';
import 'rxjs/add/operator/map';
export var KeywordService = (function () {
    function KeywordService(http) {
        this.http = http;
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.backendUrl = environment.backendUrl;
        this.url = this.backendUrl + 'keywords/';
    }
    KeywordService.prototype.getKeywords = function () {
        var url = this.url + "all";
        this.data = this.http.get(url)
            .map(function (response) { return response.json(); });
        return this.data;
    };
    KeywordService.prototype.newInstance = function (keyword) {
        var url = "" + this.url;
        return this.http
            .post(this.url, JSON.stringify(keyword), { headers: this.headers })
            .map(function (response) { return response.json().data; });
    };
    KeywordService.prototype.create = function (name) {
        return this.http
            .post(this.url, { name: name }, { headers: this.headers })
            .map(this.extractData);
    };
    KeywordService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    KeywordService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], KeywordService);
    return KeywordService;
}());
//# sourceMappingURL=keyword.service.js.map