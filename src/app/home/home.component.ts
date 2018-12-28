import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { TemplateRetrospectiveService } from './../service/impl/template-retrospective.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  firstFormGroup: FormGroup;
  selectRetrospectiveTemplateFormGroup: FormGroup;
  labelPosition;
  templates: TemplateRetrospective[];
  idTemplate: number;

  constructor(private _formBuilder: FormBuilder,
    private templateRetrospectiveService: TemplateRetrospectiveService) { }

  ngOnInit() {
    this.templates = this.templateRetrospectiveService.getAll();
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.selectRetrospectiveTemplateFormGroup = this._formBuilder.group({
      selectRetrospectiveTemplateFormControlName: ['', Validators.required]
    });

  }

}
