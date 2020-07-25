import { TestBed } from '@angular/core/testing';

import { CardService } from './services/card.service';

describe('CardServiceService', () => {
  let service: CardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
