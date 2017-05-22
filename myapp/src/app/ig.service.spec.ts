import { TestBed, inject } from '@angular/core/testing';

import { IgService } from './ig.service';

describe('IgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IgService]
    });
  });

  it('should ...', inject([IgService], (service: IgService) => {
    expect(service).toBeTruthy();
  }));
});
