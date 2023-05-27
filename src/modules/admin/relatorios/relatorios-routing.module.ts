/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { RelatoriosModule } from './relatorios.module';

/* Containers */
import * as relatoriosContainers from './containers';

/* Guards */
import * as relatoriosGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: relatoriosContainers.RelatoriosComponent,
    // },
];

@NgModule({
    imports: [RelatoriosModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class RelatoriosRoutingModule {}
