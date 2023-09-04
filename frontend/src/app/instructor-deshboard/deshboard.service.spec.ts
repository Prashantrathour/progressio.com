import { TestBed } from '@angular/core/testing';

import { DeshboardService } from './deshboard.service';

describe('DeshboardService', () => {
  let service: DeshboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeshboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
