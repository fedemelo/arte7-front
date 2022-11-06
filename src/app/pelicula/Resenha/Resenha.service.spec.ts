/* tslint:disable:no-unused-variable */
import { TestBed, async, inject } from '@angular/core/testing';
import { ResenhaService } from './Resenha.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Resenha', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
     providers: [ResenhaService]
    });
  });

  it('should ...', inject([ResenhaService], (service: ResenhaService) => {
    expect(service).toBeTruthy();
  }));
});
