import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';

import { Incident } from '../data/models';
import { IncidentService } from '../../services/incident.service';
import { KeywordService } from '../../services/keyword.service';
import { GridOptions } from 'ag-grid';
import { RedComponent } from '../common/red.component';


@Component({
  templateUrl: 'search-incident.component.html',
  encapsulation: ViewEncapsulation.None
})

export class SearchIncidentComponent implements OnInit {

  @Input() incident: Incident;

  gridOptions: GridOptions;
  incidentForm: FormGroup;
  loaded: boolean;
  incidentArray: Incident[];
  keywordIdArray: string[] = new Array();
  columnDefs: any[];
  rowData: any[];

  myOptions: IMultiSelectOption[] = [];

  mySettings: IMultiSelectSettings = {
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

  myTexts: IMultiSelectTexts = {
    checkAll: 'Check all',
    uncheckAll: 'Uncheck all',
    checked: 'checked',
    checkedPlural: 'checked',
    searchPlaceholder: 'Search...',
    defaultTitle: 'Select',
  };

  constructor(private formBuilder: FormBuilder, private service: IncidentService, private keywordService: KeywordService) {
    this.gridOptions = <GridOptions>{};
    this.loaded = false;

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
      enableColResize: true
    };

    this.gridOptions.rowData = [];

  }

  createForm() {
    this.incidentForm = this.formBuilder.group({
      keywords: []
    });
  }

  loadKeywords() {
    this.keywordService.getAll().subscribe(x => {
      this.myOptions = x;
    });
  };

  ngOnInit(): void {
    this.loadKeywords();
    this.createForm();
  }

  resetForm() {
    this.gridOptions.api.setRowData(null);
  }

  onSubmit() {
    if (!this.incidentForm.valid) {
      return;
    }
    this.gridOptions.api.setRowData(null);
    const keywordIdArray = this.incidentForm.value.keywords;
    if (keywordIdArray) {
      if (keywordIdArray.length > 3) {
        this.keywordIdArray = keywordIdArray.slice(0,3);
      }
      else {
        this.keywordIdArray = keywordIdArray;
      }
    }
    const data = this.keywordIdArray.map(String);
    this.service.search(data).subscribe(x => {
      this.incidentArray = x;
      this.loaded = true;
      this.gridOptions.api.setRowData(x);
      this.gridOptions.api.sizeColumnsToFit();
    });
  }

}
