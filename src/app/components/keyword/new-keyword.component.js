var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Keyword } from '../data/models';
import { Router } from '@angular/router';
import { KeywordService } from '../../services/keyword.service';
export var NewKeywordComponent = (function () {
    function NewKeywordComponent(fb, formBuilder, router, service) {
        this.fb = fb;
        this.formBuilder = formBuilder;
        this.router = router;
        this.service = service;
        this.createForm();
    }
    NewKeywordComponent.prototype.createForm = function () {
        this.keywordForm = this.fb.group({
            name: ['', [Validators.required]]
        });
    };
    NewKeywordComponent.prototype.ngOnChanges = function () {
        this.keywordForm.reset({
            name: this.keyword.name
        });
    };
    NewKeywordComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (!this.keywordForm.valid) {
            return;
        }
        var key = { 'id': 0, 'name': this.keywordForm.value.name };
        this.service.newInstance(key).subscribe();
        this.router.navigate(['/incident']);
    };
    __decorate([
        Input(), 
        __metadata('design:type', Keyword)
    ], NewKeywordComponent.prototype, "keyword", void 0);
    NewKeywordComponent = __decorate([
        Component({
            selector: 'app-new-keyword',
            templateUrl: 'new-keyword.component.html'
        }), 
        __metadata('design:paramtypes', [FormBuilder, FormBuilder, Router, KeywordService])
    ], NewKeywordComponent);
    return NewKeywordComponent;
}());
//# sourceMappingURL=new-keyword.component.js.map