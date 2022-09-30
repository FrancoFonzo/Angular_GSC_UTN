import { TestBed } from '@angular/core/testing';

import { InvalidEventGuard } from './invalid-event.guard';

describe('InvalidEventGuard', () => {
  let guard: InvalidEventGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InvalidEventGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
