import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheFourLsComponent } from './the-four-ls.component';

describe('TheFourLsComponent', () => {
  let component: TheFourLsComponent;
  let fixture: ComponentFixture<TheFourLsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheFourLsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheFourLsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
