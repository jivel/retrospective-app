import { TestBed } from '@angular/core/testing';

import { TemplateRetrospectiveService } from './template-retrospective.service';

describe('TemplateRetrospectiveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TemplateRetrospectiveService = TestBed.get(TemplateRetrospectiveService);
    expect(service).toBeTruthy();
  });
});
