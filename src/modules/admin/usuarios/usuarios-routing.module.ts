/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Module */
import { UsuariosModule} from './usuarios.module';
import { ManutencaoComponent } from "./manutencao/manutencao.component"

const routes: Routes = [
  {
    path: 'manut',
    component: ManutencaoComponent,
    data: {
      title: 'SBAdmin111-Manutenção Usuários',
      breadcrumbs: [
        {
          text: 'Administração',
        },
        {
          text: 'Usuários',
        },
        {
          text: 'Manutenção de usuários',
          active: true,
        },
      ],
    } as SBRouteData,
  },
];

@NgModule({
  imports: [UsuariosModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
