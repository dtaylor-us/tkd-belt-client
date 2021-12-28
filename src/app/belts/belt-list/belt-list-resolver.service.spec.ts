import { TestBed } from '@angular/core/testing';

import { BeltListResolver } from './belt-list-resolver.service';

describe('BeltListResolver', () => {
  let service: BeltListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeltListResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
