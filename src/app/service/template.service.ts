import { Injectable } from '@angular/core';
import { Template } from '../domain/template';
import { SprintRetrospectiveTemplate } from '../domain/enum/sprint-retrospective-template';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor() { }

  getAll(): Template[] {
    return [{
      id: SprintRetrospectiveTemplate.START_STOP_CONTINUE,
      title: "Start, Stop, Continue",
      description: ""
    }, {
      id: SprintRetrospectiveTemplate.GLAD_SAD_MAD,
      title: "Glad, Sad, Mad"
    }, {
      id: SprintRetrospectiveTemplate.SAILBOAT,
      title: "Sailboat"
    }, {
      id: SprintRetrospectiveTemplate.THE_4_LS,
      title: "The 4 L’s"
    }, {
      id: SprintRetrospectiveTemplate.QUICK_RETROSPECTIVE,
      title: "Quick Retrospective"
    }];
  }

}
