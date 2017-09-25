import { ReactiveFormsModule } from '@angular/forms';
import { OrcamentoComponent } from './../orcamento.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcamentoFormComponent } from './orcamento-form.component';

describe('OrcamentoFormComponent', () => {
  let component: OrcamentoFormComponent;
  let fixture: ComponentFixture<OrcamentoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrcamentoFormComponent],
      imports: [
        ReactiveFormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrcamentoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should be created addTasks was defined', () => {
    expect(this.OrcamentoFormComponent.addTasks()).toBeDefined();
  })

  // it('should be created a list of tasks', () => {
  //   expect(this.OrcamentoFormComponent.addTasks()).toContain(task);
  // })

});
