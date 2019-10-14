import { Component, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { IMultiSelectSettings } from 'angular-2-dropdown-multiselect';
import { IMultiSelectTexts  } from 'angular-2-dropdown-multiselect';

import {Incident, Keyword, StrippedComposite} from '../data/models';
import { Router } from '@angular/router';
import { IncidentService } from '../../services/incident.service';
import { KeywordService } from '../../services/keyword.service';

@Component({
  templateUrl: 'new-incident.component.html'
})

export class NewIncidentComponent implements OnChanges {

  @Input() incident: Incident;

  incidentForm: FormGroup;
  submitted: boolean;
  keywordsArray: Keyword[];
  keywordPostArray: number[] = new Array();

  myOptions: IMultiSelectOption[] = [];

  mySettings: IMultiSelectSettings = {
    pullRight: false,
    enableSearch: true,
    checkedStyle: 'checkboxes',
    buttonClasses: 'btn btn-default',
    selectionLimit: 2,
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

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private service: IncidentService,
              private keywordService: KeywordService) {
    this.loadKeywords();
    this.createForm();
  }

  createForm() {
    this.incidentForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('INC\\d{7}')] ],
      keywords: [],
      description: ['', Validators.required],
      solution: ''
    });
  }

  loadKeywords() {
    this.keywordService.getAll().subscribe(keywordArray => {
      this.keywordsArray = keywordArray;
      this.myOptions = keywordArray;
    });
  };

  ngOnChanges() {
    this.incidentForm.reset({
      name: this.incident.name
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.incidentForm.valid) {
      return;
    }
    const keywordIdArray = this.incidentForm.value.keywords;
    if (keywordIdArray) {
      if (keywordIdArray.length <= 2) {
        this.keywordPostArray = keywordIdArray;
      }
      else {
        this.keywordPostArray = keywordIdArray.slice(0, 2);
      }
    }
    const inc = {
                  'id': 0,
                  'name': this.incidentForm.value.name,
                  'description': this.incidentForm.value.description,
                  'solution': this.incidentForm.value.solution
                };
    const composite = new StrippedComposite(inc, this.keywordPostArray);
    this.service.newInstance(composite).subscribe();
    this.router.navigate(['/home']);
  }

}
