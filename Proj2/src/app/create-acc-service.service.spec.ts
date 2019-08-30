import { TestBed } from '@angular/core/testing';

import { CreateAccServiceService } from './create-acc-service.service';

describe('CreateAccServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateAccServiceService = TestBed.get(CreateAccServiceService);
    expect(service).toBeTruthy();
  });
});
