import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbouteComponent } from './aboute.component';

describe('AbouteComponent', () => {
  let component: AbouteComponent;
  let fixture: ComponentFixture<AbouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbouteComponent]
    });
    fixture = TestBed.createComponent(AbouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
