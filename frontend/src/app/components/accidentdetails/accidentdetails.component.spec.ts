import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentdetailsComponent } from './accidentdetails.component';

describe('AccidentdetailsComponent', () => {
  let component: AccidentdetailsComponent;
  let fixture: ComponentFixture<AccidentdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
