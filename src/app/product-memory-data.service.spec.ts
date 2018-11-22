import { TestBed, inject } from '@angular/core/testing';

import { ProductMemoryDataService } from './product-memory-data.service';

describe('ProductMemoryDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductMemoryDataService]
    });
  });

  it('should be created', inject([ProductMemoryDataService], (service: ProductMemoryDataService) => {
    expect(service).toBeTruthy();
  }));
});
