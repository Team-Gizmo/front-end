import { Component, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Keyword } from '../data/models';
import { Router } from '@angular/router';
import { KeywordService } from '../../services/keyword.service';

@Component({
  selector: 'app-new-keyword',
  templateUrl: 'new-keyword.component.html'
})

export class NewKeywordComponent implements OnChanges {

  @Input() keyword: Keyword;

  keywordForm: FormGroup;
  submitted: boolean;

  constructor(private fb: FormBuilder, private formBuilder: FormBuilder, private router: Router, private service: KeywordService) {
    this.createForm();
  }

  createForm() {
    this.keywordForm = this.fb.group({
      name: ['', [Validators.required] ]
    });
  }

  ngOnChanges() {
    this.keywordForm.reset({
      name: this.keyword.name
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.keywordForm.valid) {
      return;
    }
    const key = {'id': 0, 'name': this.keywordForm.value.name};
    this.service.newInstance(key).subscribe();
    this.router.navigate(['/incident']);
  }

}
