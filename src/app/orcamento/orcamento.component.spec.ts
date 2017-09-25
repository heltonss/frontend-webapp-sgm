import { ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcamentoComponent } from './orcamento.component';
import { OrcamentoPrintComponent } from './orcamento-print/orcamento-print.component';
import { OrcamentoFormComponent } from './orcamento-form/orcamento-form.component';

describe('OrcamentoComponent', () => {
  let component: OrcamentoComponent;
  let fixture: ComponentFixture<OrcamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD
      declarations: [
        OrcamentoComponent,
        OrcamentoPrintComponent,
        OrcamentoFormComponent
       ],
      imports: [
        ReactiveFormsModule
=======
      declarations: [ 
        OrcamentoComponent,
        OrcamentoPrintComponent,
        OrcamentoFormComponent
>>>>>>> 6fcda9478f0bc53ef1a431bf5a0174f1f39cb920
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
