import { TestBed } from '@angular/core/testing';

import { ItemMapService } from './item-map.service';

describe('ItemMapService', () => {
  let service: ItemMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
