import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickRetrospectiveComponent } from './quick-retrospective.component';

describe('QuickRetrospectiveComponent', () => {
  let component: QuickRetrospectiveComponent;
  let fixture: ComponentFixture<QuickRetrospectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickRetrospectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickRetrospectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
