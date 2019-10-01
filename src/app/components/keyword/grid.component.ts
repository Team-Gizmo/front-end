import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GridOptions } from 'ag-grid';
import { RedComponent } from '../common/red.component';
import { Keyword } from '../data/models';
import { KeywordService } from '../../services/keyword.service';

@Component({
  selector: 'ag-grid',
  templateUrl: './grid.component.html',
  encapsulation: ViewEncapsulation.None
})

export class KeywordGridComponent implements OnInit {

  public gridOptions: GridOptions;
  private keywordsArray: Keyword[];

  constructor(private keywordService: KeywordService) {

    this.gridOptions = <GridOptions>{};

    const columnDefs = [
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
      onCellValueChanged($event) {
        const data = $event.data;
        const keyword = {'id': data.id, 'name': data.name};
        console.log(keyword);
      }
    };

  }

  getKeywords() {
    this.keywordService.getAll().subscribe(keywordArray => {
      this.keywordsArray = keywordArray;
      this.gridOptions.api.setRowData(keywordArray);
      this.gridOptions.api.sizeColumnsToFit();
    });
  };

  /*
  getKeywords() {
    const data = this.keywordService.getAllKeywords();
    console.log('data = ' + data);
    this.gridOptions.api.setRowData(data);
    this.gridOptions.api.sizeColumnsToFit();
  };
  */

  ngOnInit(): void {
    this.getKeywords();
  }

}
