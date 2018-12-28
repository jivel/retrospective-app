import { Injectable } from '@angular/core';
import { TemplateRetrospectiveService as ITemplateRetrospectiveService } from './../template-retrospective.service';

@Injectable({
  providedIn: 'root'
})
export class TemplateRetrospectiveService implements ITemplateRetrospectiveService {

  constructor() { }

  getAll(): TemplateRetrospective[] {
    return [{
      id: 1,
      title: "Start, Stop, Continue"
    }, {
      id: 2,
      title: "Glad, Sad, Mad"
    }, {
      id: 3,
      title: "Sailboat"
    }, {
      id: 4,
      title: "The 4 L’s"
    }, {
      id: 5,
      title: "Quick Retrospective"
    }];
  }

}
