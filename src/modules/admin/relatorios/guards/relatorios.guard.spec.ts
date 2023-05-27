import { TestBed } from '@angular/core/testing';

import { RelatoriosGuard } from './relatorios.guard';

describe('Relatorios Guards', () => {
    let relatoriosGuard: RelatoriosGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [RelatoriosGuard],
        });
        relatoriosGuard = TestBed.inject(RelatoriosGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            relatoriosGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
