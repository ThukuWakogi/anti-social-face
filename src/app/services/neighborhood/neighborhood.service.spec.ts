import { TestBed } from '@angular/core/testing';

import { NeighborhoodService } from './neighborhood.service';

describe('NeighborhoodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NeighborhoodService = TestBed.get(NeighborhoodService);
    expect(service).toBeTruthy();
  });
});
