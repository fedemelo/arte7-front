/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DirectorSerivceService } from './directorSerivce.service';

describe('Service: DirectorSerivce', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DirectorSerivceService]
    });
  });

  it('should ...', inject([DirectorSerivceService], (service: DirectorSerivceService) => {
    expect(service).toBeTruthy();
  }));
});
