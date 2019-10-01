import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GridOptions } from 'ag-grid';
import { RedComponent } from '../common/red.component';
import {Incident} from '../data/models';
import { IncidentService } from '../../services/incident.service';

@Component({
  selector: 'app-grid',
  templateUrl: 'grid.component.html',
  encapsulation: ViewEncapsulation.None
})

export class IncidentGridComponent implements OnInit {

  public gridOptions: GridOptions;
  private incidentsArray: Incident[];

  constructor(private incidentService: IncidentService) {

    this.gridOptions = <GridOptions>{};

    const columnDefs = [
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
      onCellValueChanged($event) {
        const data = $event.data;
        const incident = {'id': data.id, 'name': data.name, 'description': data.description, 'solution': data.solution};
        incidentService.update(incident).subscribe();
      }
    };

  }

  getIncidents() {
    this.incidentService.getIncidents().subscribe(incidentArray => {
      this.incidentsArray = incidentArray;
      this.gridOptions.api.setRowData(incidentArray);
      this.gridOptions.api.sizeColumnsToFit();
    });
  };

  addIncident (name: string) {
    if (name) {
      this.incidentService.create(name).subscribe(incident => {
        this.incidentsArray.push(incident);
      });
    }
  };

  updateSolution (id: number, solution: string) {
    console.log('updateIncident ID: ' + id + ', solution: ' + solution);
  };

  onModelUpdated() {}

  onCellDoubleClicked($event: any) {
    const data = $event.data;
  }

  ngOnInit(): void {
    this.getIncidents();
  }

}
