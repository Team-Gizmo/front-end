var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Incident } from '../data/models';
import { IncidentService } from '../../services/incident.service';
import { KeywordService } from '../../services/keyword.service';
import { RedComponent } from '../common/red.component';
export var SearchIncidentComponent = (function () {
    function SearchIncidentComponent(formBuilder, service, keywordService) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.keywordService = keywordService;
        this.keywordIdArray = new Array();
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
        this.gridOptions = {};
        this.loaded = false;
        var columnDefs = [
            {
                headerName: 'ID',
                field: 'id',
                editable: false,
                hide: true
            },
            {
                headerName: 'Ticket',
                field: 'name',
                cellRendererFramework: RedComponent,
                width: 150,
                minWidth: 75,
                pinned: true,
                editable: false,
                cellClass: 'rightAlign'
            },
            {
                headerName: 'Description',
                field: 'description',
                editable: false,
                width: 650,
                minWidth: 200
            },
            {
                headerName: 'Solution',
                field: 'solution',
                editable: true,
                width: 650,
                minWidth: 200
            }
        ];
        this.gridOptions = {
            columnDefs: columnDefs,
            enableFilter: true,
            enableSorting: true,
            enableColResize: true
        };
        this.gridOptions.rowData = [];
    }
    SearchIncidentComponent.prototype.createForm = function () {
        this.incidentForm = this.formBuilder.group({
            keywords: []
        });
    };
    SearchIncidentComponent.prototype.loadKeywords = function () {
        var _this = this;
        this.keywordService.getKeywords().subscribe(function (x) {
            _this.myOptions = x;
        });
    };
    ;
    SearchIncidentComponent.prototype.ngOnInit = function () {
        this.loadKeywords();
        this.createForm();
    };
    SearchIncidentComponent.prototype.resetForm = function () {
        this.gridOptions.api.setRowData(null);
    };
    SearchIncidentComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.incidentForm.valid) {
            return;
        }
        this.gridOptions.api.setRowData(null);
        var keywordIdArray = this.incidentForm.value.keywords;
        if (keywordIdArray) {
            if (keywordIdArray.length > 3) {
                this.keywordIdArray = keywordIdArray.slice(0, 3);
            }
            else {
                this.keywordIdArray = keywordIdArray;
            }
        }
        var data = this.keywordIdArray.map(String);
        this.service.search(data).subscribe(function (x) {
            _this.incidentArray = x;
            _this.loaded = true;
            _this.gridOptions.api.setRowData(x);
            _this.gridOptions.api.sizeColumnsToFit();
        });
    };
    __decorate([
        Input(), 
        __metadata('design:type', Incident)
    ], SearchIncidentComponent.prototype, "incident", void 0);
    SearchIncidentComponent = __decorate([
        Component({
            templateUrl: 'search-incident.component.html',
            encapsulation: ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [FormBuilder, IncidentService, KeywordService])
    ], SearchIncidentComponent);
    return SearchIncidentComponent;
}());
//# sourceMappingURL=search-incident.component.js.map