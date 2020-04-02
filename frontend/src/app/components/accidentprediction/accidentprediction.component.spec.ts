import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentpredictionComponent } from './accidentprediction.component';

describe('AccidentpredictionComponent', () => {
  let component: AccidentpredictionComponent;
  let fixture: ComponentFixture<AccidentpredictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentpredictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentpredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
