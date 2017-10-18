import { TestBed, inject } from '@angular/core/testing';

import { MorseCodeOperatorService } from './morse-code-operator.service';

describe('MorseCodeOperatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MorseCodeOperatorService]
    });
  });

  it('should ...', inject([MorseCodeOperatorService], (service: MorseCodeOperatorService) => {
    expect(service).toBeTruthy();
  }));
});
