var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewEncapsulation } from '@angular/core';
import { RedComponent } from '../common/red.component';
import { KeywordService } from '../../services/keyword.service';
export var KeywordGridComponent = (function () {
    function KeywordGridComponent(keywordService) {
        this.keywordService = keywordService;
        this.gridOptions = {};
        var columnDefs = [
            {
                headerName: 'ID',
                field: 'id',
                editable: false,
                hide: true
            },
            {
                headerName: 'Name',
                field: 'name',
                cellRendererFramework: RedComponent,
                width: 50,
                minWidth: 50,
                pinned: false,
                editable: true,
                cellClass: 'rightAlign'
            }
        ];
        this.gridOptions = {
            columnDefs: columnDefs,
            enableFilter: true,
            enableSorting: true,
            enableColResize: true,
            editType: 'fullRow',
            onCellValueChanged: function ($event) {
                var data = $event.data;
                var keyword = { 'id': data.id, 'name': data.name };
                console.log(keyword);
            }
        };
    }
    KeywordGridComponent.prototype.getKeywords = function () {
        var _this = this;
        this.keywordService.getKeywords().subscribe(function (keywordArray) {
            _this.keywordsArray = keywordArray;
            _this.gridOptions.api.setRowData(keywordArray);
            _this.gridOptions.api.sizeColumnsToFit();
        });
    };
    ;
    KeywordGridComponent.prototype.ngOnInit = function () {
        this.getKeywords();
    };
    KeywordGridComponent = __decorate([
        Component({
            selector: 'ag-grid',
            templateUrl: './grid.component.html',
            encapsulation: ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [KeywordService])
    ], KeywordGridComponent);
    return KeywordGridComponent;
}());
//# sourceMappingURL=grid.component.js.map