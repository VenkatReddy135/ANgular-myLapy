import { TestBed, async, inject } from '@angular/core/testing';

import { DecativeGuard } from './decative.guard';

describe('DecativeGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DecativeGuard]
    });
  });

  it('should ...', inject([DecativeGuard], (guard: DecativeGuard) => {
    expect(guard).toBeTruthy();
  }));
});
