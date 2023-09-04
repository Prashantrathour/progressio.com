import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCardComponent } from './student-card.component';

describe('StudentCardComponent', () => {
  let component: StudentCardComponent;
  let fixture: ComponentFixture<StudentCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentCardComponent]
    });
    fixture = TestBed.createComponent(StudentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
