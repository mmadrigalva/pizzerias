/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HomeOptionsService } from './home-options.service';

describe('Service: HomeOptions', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeOptionsService]
    });
  });

  it('should ...', inject([HomeOptionsService], (service: HomeOptionsService) => {
    expect(service).toBeTruthy();
  }));
});
