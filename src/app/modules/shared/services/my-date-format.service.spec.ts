import { TestBed } from '@angular/core/testing';

import { MyDateFormatService } from './my-date-format.service';

describe('MyDateFormatService', () => {
  let service: MyDateFormatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyDateFormatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
