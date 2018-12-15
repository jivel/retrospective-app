import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartStopContinueComponent } from './start-stop-continue.component';

describe('StartStopContinueComponent', () => {
  let component: StartStopContinueComponent;
  let fixture: ComponentFixture<StartStopContinueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartStopContinueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartStopContinueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
