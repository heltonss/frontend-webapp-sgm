import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { OrcamentoComponent } from './orcamento.component';
import { OrcamentoFormComponent } from './orcamento-form/orcamento-form.component';

const route: Routes = [
  {
    path: 'orcamento',
    component: OrcamentoComponent,
    children: [
      {
        path: '',
        component: OrcamentoFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(route)],
  declarations: [],
  exports: [RouterModule]
})
export class OrcamentoRoutingModule {}
