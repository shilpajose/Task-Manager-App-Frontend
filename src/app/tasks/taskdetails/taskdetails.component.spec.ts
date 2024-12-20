import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskdetailsComponent } from './taskdetails.component';

describe('TaskdetailsComponent', () => {
  let component: TaskdetailsComponent;
  let fixture: ComponentFixture<TaskdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskdetailsComponent]
    });
    fixture = TestBed.createComponent(TaskdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
