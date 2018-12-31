import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Template } from '../domain/template';
import { TemplateService } from '../service/template.service';

@Component({
  selector: 'app-select-retrospective',
  templateUrl: './select-retrospective.component.html',
  styleUrls: ['./select-retrospective.component.css']
})
export class SelectRetrospectiveComponent implements OnInit {
  isLinear = false;
  selectTemplateFormGroup: FormGroup;
  teamInformationFormGroup: FormGroup;
  templates: Template[];
  selectedTemplateId: number;
  teamName: string;
  sprint: string;

  constructor(
    private _formBuilder: FormBuilder,
    private templateService: TemplateService) {
    this.templates = this.templateService.getAll();
    this.selectedTemplateId = this.templates[0].id;
  }

  ngOnInit() {
    this.selectTemplateFormGroup = this._formBuilder.group({
      selectTemplateFormControlName: ['', Validators.required]
    });
    this.teamInformationFormGroup = this._formBuilder.group({
      teamInformationFormControlName: ['', Validators.required]
    });
  }

  onShare() {
    console.log("Selected Template", this.selectedTemplateId);
    console.log("Team", this.teamName);
    console.log("Sprint", this.sprint);
  }
}