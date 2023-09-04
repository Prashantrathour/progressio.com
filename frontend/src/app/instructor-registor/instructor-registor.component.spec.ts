import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorRegistorComponent } from './instructor-registor.component';

describe('InstructorRegistorComponent', () => {
  let component: InstructorRegistorComponent;
  let fixture: ComponentFixture<InstructorRegistorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstructorRegistorComponent]
    });
    fixture = TestBed.createComponent(InstructorRegistorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
