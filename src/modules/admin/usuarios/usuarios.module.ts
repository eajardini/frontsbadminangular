import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import { ManutencaoComponent } from './manutencao/manutencao.component';

/* Containers */


/* Guards */


/* Services */






@NgModule({
  declarations: [    ManutencaoComponent,],
  imports: [     
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    AppCommonModule,
    NavigationModule,
    

  ]
})
export class UsuariosModule { }
