/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as relatoriosComponents from './components';

/* Containers */
import * as relatoriosContainers from './containers';

/* Guards */
import * as relatoriosGuards from './guards';

/* Services */
import * as relatoriosServices from './services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
    ],
    providers: [...relatoriosServices.services, ...relatoriosGuards.guards],
    declarations: [...relatoriosContainers.containers, ...relatoriosComponents.components],
    exports: [...relatoriosContainers.containers, ...relatoriosComponents.components],
})
export class RelatoriosModule {}
