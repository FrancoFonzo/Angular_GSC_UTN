import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service';

describe('MovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({
  }));

  it('should be created', () => {
    const service: MovieService = TestBed.get(MovieService);
    expect(service).toBeTruthy();
  });

  it('adding a cast member increases the cast member count by one', () => {
    const service: MovieService = TestBed.get(MovieService);
		service.addCastMember('Franco', 'Test');
		expect(service.castMembers.length).toBe(1);
  });

});
