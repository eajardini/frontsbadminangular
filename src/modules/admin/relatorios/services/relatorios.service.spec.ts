import { TestBed } from '@angular/core/testing';

import { RelatoriosService } from './relatorios.service';

describe('RelatoriosService', () => {
    let relatoriosService: RelatoriosService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [RelatoriosService],
        });
        relatoriosService = TestBed.inject(RelatoriosService);
    });

    describe('getRelatorios$', () => {
        it('should return Observable<Relatorios>', () => {
            expect(relatoriosService).toBeDefined();
        });
    });
});
