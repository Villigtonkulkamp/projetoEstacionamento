import { TestBed } from '@angular/core/testing';

import { DropdownSaidaService } from './dropdown-saida.service';

describe('DropdownSaidaService', () => {
  let service: DropdownSaidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropdownSaidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
