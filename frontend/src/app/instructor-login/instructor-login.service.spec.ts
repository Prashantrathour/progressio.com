import { TestBed } from '@angular/core/testing';

import { InstructorLoginService } from './instructor-login.service';

describe('InstructorLoginService', () => {
  let service: InstructorLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstructorLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
