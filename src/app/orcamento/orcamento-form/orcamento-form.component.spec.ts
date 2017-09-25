
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { OrcamentoFormComponent } from './orcamento-form.component';

describe('OrcamentoFormComponent', () => {
  let component: OrcamentoFormComponent;
  let fixture: ComponentFixture<OrcamentoFormComponent>;

  const nomeCliente = 'Helton';
  const emailCliente = 'helton@heltonsouza.com.br'

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrcamentoFormComponent],
      imports: []
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

  it('should register a budget', fakeAsync(() => {

    let nome = fixture.debugElement.query(By.css('#nome')).nativeElement;
    nome.value = 'Helton';
    nome.dispatchEvent(new Event('input'));

    let email = fixture.debugElement.query(By.css('#email')).nativeElement;
    email.value = 'helton@heltonsouza.com.br';
    email.dispatchEvent(new Event('input'));


    let btnCadastrar = fixture.debugElement.query(By.css('.btnPrint'));
    btnCadastrar.triggerEventHandler('click', null);

    expect(nome.value).toBe(nomeCliente);
    expect(email.value).toBe(emailCliente);


  }));

});
