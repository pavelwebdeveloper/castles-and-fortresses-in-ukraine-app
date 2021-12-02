import { TestBed } from '@angular/core/testing';

import { StrongholdService } from './stronghold.service';

describe('StrongholdService', () => {
  let service: StrongholdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StrongholdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
