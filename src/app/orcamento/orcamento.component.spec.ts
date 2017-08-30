import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcamentoComponent } from './orcamento.component';
import { OrcamentoPrintComponent } from './orcamento-print/orcamento-print.component';
import { OrcamentoFormComponent } from './orcamento-form/orcamento-form.component';

describe('OrcamentoComponent', () => {
  let component: OrcamentoComponent;
  let fixture: ComponentFixture<OrcamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        OrcamentoComponent,
        OrcamentoPrintComponent,
        OrcamentoFormComponent
      ]
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
