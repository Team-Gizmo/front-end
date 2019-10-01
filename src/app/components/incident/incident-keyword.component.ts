import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GridOptions } from 'ag-grid';
import { RedComponent } from '../common/red.component';
import {IncidentKeyword, Keyword} from '../data/models';
import { KeywordService } from '../../services/keyword.service';
import {IncidentService} from "../../services/incident.service";

@Component({
  selector: 'ag-grid',
  templateUrl: './incident.keyword.grid.component.html',
  encapsulation: ViewEncapsulation.None
})

export class IncidentKeywordGridComponent implements OnInit {

  public gridOptions: GridOptions;
  private incidentKeywordsArray: IncidentKeyword[];

  constructor(private incidentService: IncidentService) {

    this.gridOptions = <GridOptions>{};

    const columnDefs = [
      {
        headerName: 'Keyword',
        field: 'keywordName',
        editable: false,
        hide: false
      },
      {
        headerName: 'Incident',
        field: 'incidentName',
        cellRendererFramework: RedComponent,
        editable: false,
        hide: false
      },
      {
        headerName: 'Description',
        field: 'description',
        editable: false,
        hide: false
      },
      {
        headerName: 'Solution',
        field: 'solution',
        editable: false,
        hide: false
      }
    ];

    this.gridOptions = {
      columnDefs: columnDefs,
      enableFilter: true,
      enableSorting: true,
      enableColResize: true
    };

  }

  getIncidentKeywords() {
    this.incidentService.getIncidentKeywords().subscribe(resp => {
      this.incidentKeywordsArray = resp;
      this.gridOptions.api.setRowData(resp);
      this.gridOptions.api.sizeColumnsToFit();
    });
  };

  ngOnInit(): void {
    this.getIncidentKeywords();
  }

}
