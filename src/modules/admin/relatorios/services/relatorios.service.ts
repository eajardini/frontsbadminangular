import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class RelatoriosService {
    constructor() {}

    getRelatorios$(): Observable<{}> {
        return of({});
    }

}
