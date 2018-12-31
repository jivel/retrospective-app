import { Injectable } from '@angular/core';
import { Template } from '../domain/template';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor() { }

  getAll(): Template[] {
    return [{
      id: 1,
      title: "Start, Stop, Continue",
      description: ""
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
