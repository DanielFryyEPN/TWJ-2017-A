import { TestBed, inject } from '@angular/core/testing';

import { EstaLogueadoService } from './esta-logueado.service';

describe('EstaLogueadoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstaLogueadoService]
    });
  });

  it('should be created', inject([EstaLogueadoService], (service: EstaLogueadoService) => {
    expect(service).toBeTruthy();
  }));
});
