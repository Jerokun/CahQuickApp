import { TestBed } from '@angular/core/testing';

import { DeckGeneratorService } from './deck-generator.service';

describe('DeckGeneratorService', () => {
  let service: DeckGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeckGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
