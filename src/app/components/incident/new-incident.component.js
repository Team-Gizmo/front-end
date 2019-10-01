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
import { Incident, StrippedComposite } from '../data/models';
import { Router } from '@angular/router';
import { IncidentService } from '../../services/incident.service';
import { KeywordService } from '../../services/keyword.service';
export var NewIncidentComponent = (function () {
    function NewIncidentComponent(formBuilder, router, service, keywordService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.service = service;
        this.keywordService = keywordService;
        this.keywordPostArray = new Array();
        this.myOptions = [];
        this.mySettings = {
            pullRight: false,
            enableSearch: true,
            checkedStyle: 'checkboxes',
            buttonClasses: 'btn btn-default',
            selectionLimit: 3,
            closeOnSelect: false,
            showCheckAll: false,
            showUncheckAll: false,
            dynamicTitleMaxItems: 3,
            maxHeight: '300px',
        };
        this.myTexts = {
            checkAll: 'Check all',
            uncheckAll: 'Uncheck all',
            checked: 'checked',
            checkedPlural: 'checked',
            searchPlaceholder: 'Search...',
            defaultTitle: 'Select',
        };
        this.loadKeywords();
        this.createForm();
    }
    NewIncidentComponent.prototype.createForm = function () {
        this.incidentForm = this.formBuilder.group({
            name: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('INC\\d{7}')]],
            keywords: [],
            description: ['', Validators.required],
            solution: ''
        });
    };
    NewIncidentComponent.prototype.loadKeywords = function () {
        var _this = this;
        this.keywordService.getKeywords().subscribe(function (keywordArray) {
            _this.keywordsArray = keywordArray;
            _this.myOptions = keywordArray;
        });
    };
    ;
    NewIncidentComponent.prototype.ngOnChanges = function () {
        this.incidentForm.reset({
            name: this.incident.name
        });
    };
    NewIncidentComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (!this.incidentForm.valid) {
            return;
        }
        var keywordIdArray = this.incidentForm.value.keywords;
        if (keywordIdArray) {
            if (keywordIdArray.length <= 3) {
                this.keywordPostArray = keywordIdArray;
            }
            else {
                this.keywordPostArray = keywordIdArray.slice(0, 3);
            }
        }
        var inc = {
            'id': 0,
            'name': this.incidentForm.value.name,
            'description': this.incidentForm.value.description,
            'solution': this.incidentForm.value.solution
        };
        var composite = new StrippedComposite(inc, this.keywordPostArray);
        this.service.newInstance(composite).subscribe();
        this.router.navigate(['/home']);
    };
    __decorate([
        Input(), 
        __metadata('design:type', Incident)
    ], NewIncidentComponent.prototype, "incident", void 0);
    NewIncidentComponent = __decorate([
        Component({
            templateUrl: 'new-incident.component.html'
        }), 
        __metadata('design:paramtypes', [FormBuilder, Router, IncidentService, KeywordService])
    ], NewIncidentComponent);
    return NewIncidentComponent;
}());
//# sourceMappingURL=new-incident.component.js.map