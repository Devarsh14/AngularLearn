import { TestBed } from '@angular/core/testing';

import { NameDefineServiceService } from './name-define-service.service';

describe('NameDefineServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NameDefineServiceService = TestBed.get(NameDefineServiceService);
    expect(service).toBeTruthy();
  });
});
