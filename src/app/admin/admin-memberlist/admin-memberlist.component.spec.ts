import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMemberlistComponent } from './admin-memberlist.component';

describe('AdminMemberlistComponent', () => {
  let component: AdminMemberlistComponent;
  let fixture: ComponentFixture<AdminMemberlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminMemberlistComponent]
    });
    fixture = TestBed.createComponent(AdminMemberlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
