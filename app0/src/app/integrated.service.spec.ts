import { TestBed } from '@angular/core/testing';

import { IntegratedService } from './integrated.service';

describe('IntegratedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IntegratedService = TestBed.get(IntegratedService);
    expect(service).toBeTruthy();
  });
});
