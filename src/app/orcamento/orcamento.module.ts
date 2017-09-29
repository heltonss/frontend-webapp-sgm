import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { OrcamentoFormComponent } from './orcamento-form/orcamento-form.component';
import { OrcamentoComponent } from './../orcamento/orcamento.component';
import { OrcamentoRoutingModule } from './../orcamento/orcamento-routing.module';
import { OrcamentoPrintComponent } from './orcamento-print/orcamento-print.component';
import { CurrencybrPipe } from './../shared/currencybr.pipe';
import { DataService } from './../shared/data.service';

@NgModule({
  imports: [
    CommonModule,
    OrcamentoRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    OrcamentoComponent,
    OrcamentoFormComponent,
    OrcamentoPrintComponent,
    CurrencybrPipe
  ],
  providers: [DataService]
})
export class OrcamentoModule { }
