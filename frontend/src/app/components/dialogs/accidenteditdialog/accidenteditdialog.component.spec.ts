import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidenteditdialogComponent } from './accidenteditdialog.component';

describe('AccidenteditdialogComponent', () => {
  let component: AccidenteditdialogComponent;
  let fixture: ComponentFixture<AccidenteditdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidenteditdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidenteditdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
