import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleRequestDialogComponent } from './role-request-dialog.component';

describe('RoleRequestDialogComponent', () => {
  let component: RoleRequestDialogComponent;
  let fixture: ComponentFixture<RoleRequestDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleRequestDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleRequestDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
