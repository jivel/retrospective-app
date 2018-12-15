import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GladSadMadComponent } from './glad-sad-mad.component';

describe('GladSadMadComponent', () => {
  let component: GladSadMadComponent;
  let fixture: ComponentFixture<GladSadMadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GladSadMadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GladSadMadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
