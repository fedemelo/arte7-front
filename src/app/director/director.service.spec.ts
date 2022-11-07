/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DirectorService } from './director.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Director', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DirectorService]
    });
  });

  it('should ...', inject([DirectorService], (service: DirectorService) => {
    expect(service).toBeTruthy();
  }));
});
