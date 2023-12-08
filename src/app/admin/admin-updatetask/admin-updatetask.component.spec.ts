import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdatetaskComponent } from './admin-updatetask.component';

describe('AdminUpdatetaskComponent', () => {
  let component: AdminUpdatetaskComponent;
  let fixture: ComponentFixture<AdminUpdatetaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUpdatetaskComponent]
    });
    fixture = TestBed.createComponent(AdminUpdatetaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
