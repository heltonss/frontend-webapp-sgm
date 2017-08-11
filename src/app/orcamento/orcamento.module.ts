import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrcamentoFormComponent } from './orcamento-form/orcamento-form.component';
import { OrcamentoComponent } from './../orcamento/orcamento.component';
import { OrcamentoRoutingModule } from './../orcamento/orcamento-routing.module';
import { OrcamentoPrintComponent } from './orcamento-print/orcamento-print.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    OrcamentoRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [OrcamentoComponent, OrcamentoFormComponent, OrcamentoPrintComponent]
})
export class OrcamentoModule { }
