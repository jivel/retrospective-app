import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRetrospectiveComponent } from './select-retrospective.component';

describe('SelectRetrospectiveComponent', () => {
  let component: SelectRetrospectiveComponent;
  let fixture: ComponentFixture<SelectRetrospectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectRetrospectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectRetrospectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
