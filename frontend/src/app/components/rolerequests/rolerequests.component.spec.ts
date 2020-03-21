import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolerequestsComponent } from './rolerequests.component';

describe('RolerequestsComponent', () => {
  let component: RolerequestsComponent;
  let fixture: ComponentFixture<RolerequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolerequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolerequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
