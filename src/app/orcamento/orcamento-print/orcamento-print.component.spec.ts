import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OrcamentoPrintComponent } from './orcamento-print.component';
import { By } from '@angular/platform-browser';
import { DataService } from 'app/shared/data.service';

describe('OrcamentoPrintComponent', () => {
  let component: OrcamentoPrintComponent;
  let fixture: ComponentFixture<OrcamentoPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrcamentoPrintComponent],
      providers: [DataService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrcamentoPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });



});
