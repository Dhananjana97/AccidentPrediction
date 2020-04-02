import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictionwarningComponent } from './predictionwarning.component';

describe('PredictionwarningComponent', () => {
  let component: PredictionwarningComponent;
  let fixture: ComponentFixture<PredictionwarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictionwarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictionwarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
