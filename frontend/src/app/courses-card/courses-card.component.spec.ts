import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesCardComponent } from './courses-card.component';

describe('CoursesCardComponent', () => {
  let component: CoursesCardComponent;
  let fixture: ComponentFixture<CoursesCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesCardComponent]
    });
    fixture = TestBed.createComponent(CoursesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
