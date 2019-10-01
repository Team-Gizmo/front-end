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
import { IncidentService } from '../../services/incident.service';
export var IncidentGridComponent = (function () {
    function IncidentGridComponent(incidentService) {
        this.incidentService = incidentService;
        this.gridOptions = {};
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
            enableColResize: true,
            editType: 'fullRow',
            onCellValueChanged: function ($event) {
                var data = $event.data;
                var incident = { 'id': data.id, 'name': data.name, 'description': data.description, 'solution': data.solution };
                incidentService.update(incident).subscribe();
            }
        };
    }
    IncidentGridComponent.prototype.getIncidents = function () {
        var _this = this;
        this.incidentService.getIncidents().subscribe(function (incidentArray) {
            _this.incidentsArray = incidentArray;
            _this.gridOptions.api.setRowData(incidentArray);
            _this.gridOptions.api.sizeColumnsToFit();
        });
    };
    ;
    IncidentGridComponent.prototype.addIncident = function (name) {
        var _this = this;
        if (name) {
            this.incidentService.create(name).subscribe(function (incident) {
                _this.incidentsArray.push(incident);
            });
        }
    };
    ;
    IncidentGridComponent.prototype.updateSolution = function (id, solution) {
        console.log('updateIncident ID: ' + id + ', solution: ' + solution);
    };
    ;
    IncidentGridComponent.prototype.onModelUpdated = function () {
        console.log('Model updated');
    };
    IncidentGridComponent.prototype.onCellDoubleClicked = function ($event) {
        var data = $event.data;
    };
    IncidentGridComponent.prototype.ngOnInit = function () {
        this.getIncidents();
    };
    IncidentGridComponent = __decorate([
        Component({
            selector: 'app-grid',
            templateUrl: 'grid.component.html',
            encapsulation: ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [IncidentService])
    ], IncidentGridComponent);
    return IncidentGridComponent;
}());
//# sourceMappingURL=grid.component.js.map