import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasklistsComponent } from './tasklists.component';

describe('TasklistsComponent', () => {
  let component: TasklistsComponent;
  let fixture: ComponentFixture<TasklistsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasklistsComponent]
    });
    fixture = TestBed.createComponent(TasklistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
