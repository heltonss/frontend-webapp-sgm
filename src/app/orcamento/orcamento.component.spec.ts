import { ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcamentoComponent } from './orcamento.component';
import { OrcamentoPrintComponent } from './orcamento-print/orcamento-print.component';
import { OrcamentoFormComponent } from './orcamento-form/orcamento-form.component';
import { CurrencybrPipe } from './../shared/currencybr.pipe';
import { DataService } from './../shared/data.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('OrcamentoComponent', () => {
  let component: OrcamentoComponent;
  let fixture: ComponentFixture<OrcamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OrcamentoComponent,
        OrcamentoPrintComponent,
        OrcamentoFormComponent,
        CurrencybrPipe
      ],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [DataService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrcamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
