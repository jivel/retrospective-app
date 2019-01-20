import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Template } from '../domain/template';
import { TemplateService } from '../service/template.service';
import { SprintRetrospectiveTemplate } from '../domain/enum/sprint-retrospective-template';

@Component({
  selector: 'app-select-retrospective',
  templateUrl: './select-retrospective.component.html',
  styleUrls: ['./select-retrospective.component.css']
})
export class SelectRetrospectiveComponent implements OnInit {
  selectTemplateFormGroup: FormGroup;
  teamInformationFormGroup: FormGroup;
  templates: Template[];

  constructor(
    private _formBuilder: FormBuilder,
    private templateService: TemplateService) {
    this.templates = this.templateService.getAll();
  }

  ngOnInit() {
    this.selectTemplateFormGroup = this._formBuilder.group({
      selectTemplateFormControlName: ['', Validators.required]
    });
    this.teamInformationFormGroup = this._formBuilder.group({
      teamNameTeamInformationFormControlName: [null, Validators.required],
      sprintTeamInformationFormControlName: [null, Validators.required]
    });
  }

  onCreate() {
    var sprintRetrospectiveTemplateValue: number = this.selectTemplateFormGroup.get('selectTemplateFormControlName').value;
    console.log("Selected Template", SprintRetrospectiveTemplate.getURI(sprintRetrospectiveTemplateValue));
    console.log("Team", this.teamInformationFormGroup.get('teamNameTeamInformationFormControlName').value);
    console.log("Sprint", this.teamInformationFormGroup.get('sprintTeamInformationFormControlName').value);
  }
}