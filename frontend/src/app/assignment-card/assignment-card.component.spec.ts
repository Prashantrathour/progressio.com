import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentCardComponent } from './assignment-card.component';

describe('AssignmentCardComponent', () => {
  let component: AssignmentCardComponent;
  let fixture: ComponentFixture<AssignmentCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignmentCardComponent]
    });
    fixture = TestBed.createComponent(AssignmentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
