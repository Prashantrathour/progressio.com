import { TestBed } from '@angular/core/testing';

import { StudentDeshboardService } from './student-deshboard.service';

describe('StudentDeshboardService', () => {
  let service: StudentDeshboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentDeshboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
