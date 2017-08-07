import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardMenuComponent } from './dashboard-menu/dashboard-menu.component';
import { OrcamentoComponent } from './../orcamento/orcamento.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: DashboardMenuComponent
      }, {
        path: 'orcamento',
        component: OrcamentoComponent
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class MainRoutingModule {}
