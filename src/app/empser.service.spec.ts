import { TestBed } from '@angular/core/testing';

import { EmpserService } from './empser.service';

describe('EmpserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpserService = TestBed.get(EmpserService);
    expect(service).toBeTruthy();
  });
});
