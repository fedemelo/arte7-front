/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlataformaService } from './plataforma.service';

describe('Service: Plataforma', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlataformaService]
    });
  });

  it('should ...', inject([PlataformaService], (service: PlataformaService) => {
    expect(service).toBeTruthy();
  }));
});
