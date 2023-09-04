import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorDeshboardComponent } from './instructor-deshboard.component';

describe('InstructorDeshboardComponent', () => {
  let component: InstructorDeshboardComponent;
  let fixture: ComponentFixture<InstructorDeshboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstructorDeshboardComponent]
    });
    fixture = TestBed.createComponent(InstructorDeshboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
