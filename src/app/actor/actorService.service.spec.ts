/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ActorServiceService } from './actorService.service';

describe('Service: ActorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActorServiceService]
    });
  });

  it('should ...', inject([ActorServiceService], (service: ActorServiceService) => {
    expect(service).toBeTruthy();
  }));
});
