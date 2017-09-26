
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { OrcamentoFormComponent } from './orcamento-form.component';
import { User } from './../../shared/model/user';
import { Address } from './../../shared/model/address';
import { Vehicle } from './../../shared/model/vehicle';
import { Task } from './../../shared/model/Task';

describe('OrcamentoFormComponent', () => {
  let component: OrcamentoFormComponent;
  let fixture: ComponentFixture<OrcamentoFormComponent>;

  const dataClient = new User('Helton', 'souza silveira', '123.456.789-10', 'helton@heltonsouza.com.br', '11 1111-1111');
  const dataAddress = new Address('dos sonhos', '100', 'District', 'City', '00000-000', 'SP');
  const dataVehicle = new Vehicle('Gol', 'Volkswagem', 2010, 1000, 'AAA 1234')
  const dataTask = new Task('Description', 2500)

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
    // fixture.detectChanges();
    component = new OrcamentoFormComponent(new FormBuilder())
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should create a form with 4 controls', () => {
    component.ngOnInit();
    expect(component.form.contains('clientData')).toBeTruthy();
    expect(component.form.contains('clientAddress')).toBeTruthy();
    expect(component.form.contains('clientVehicle')).toBeTruthy();
    expect(component.form.contains('clientTasks')).toBeTruthy();
  });


  it('should register a budget', fakeAsync(() => {

    // data client
    const name = fixture.debugElement.query(By.css('#name')).nativeElement;
    name.value = 'Helton';
    name.dispatchEvent(new Event('input'));

    const email = fixture.debugElement.query(By.css('#email')).nativeElement;
    email.value = 'helton@heltonsouza.com.br';
    email.dispatchEvent(new Event('input'));

    const tel = fixture.debugElement.query(By.css('#tel')).nativeElement;
    tel.value = '11 1111-1111';
    tel.dispatchEvent(new Event('input'));


    // data address client
    const street = fixture.debugElement.query(By.css('#street')).nativeElement;
    street.value = 'dos sonhos';
    street.dispatchEvent(new Event('input'));

    const number = fixture.debugElement.query(By.css('#number')).nativeElement;
    number.value = '100';
    number.dispatchEvent(new Event('input'));

    const district = fixture.debugElement.query(By.css('#district')).nativeElement;
    district.value = 'District';
    district.dispatchEvent(new Event('input'));

    const city = fixture.debugElement.query(By.css('#city')).nativeElement;
    city.value = 'City';
    city.dispatchEvent(new Event('input'));

    const cep = fixture.debugElement.query(By.css('#cep')).nativeElement;
    cep.value = '00000-000';
    cep.dispatchEvent(new Event('input'));


    // data vehicle client
    const manufacturer = fixture.debugElement.query(By.css('#manufacturer')).nativeElement;
    manufacturer.value = 'Volkswagem';
    manufacturer.dispatchEvent(new Event('input'));

    const model = fixture.debugElement.query(By.css('#model')).nativeElement;
    model.value = 'Gol';
    model.dispatchEvent(new Event('input'));

    const yearOfManufacturer = fixture.debugElement.query(By.css('#yearOfManufacturer')).nativeElement;
    yearOfManufacturer.value = 2010;
    yearOfManufacturer.dispatchEvent(new Event('input'));

    const km = fixture.debugElement.query(By.css('#km')).nativeElement;
    km.value = 1000;
    km.dispatchEvent(new Event('input'));

    const plate = fixture.debugElement.query(By.css('#plate')).nativeElement;
    plate.value = 'AAA 1234';
    plate.dispatchEvent(new Event('input'));


    // client tasks
    const description = fixture.debugElement.query(By.css('#description')).nativeElement;
    description.value = 'Description';
    description.dispatchEvent(new Event('input'));

    const price = fixture.debugElement.query(By.css('#price')).nativeElement;
    price.value = '2500';
    price.dispatchEvent(new Event('input'));


    // client info
    const info = fixture.debugElement.query(By.css('#info')).nativeElement;
    info.value = 'Descrição';
    info.dispatchEvent(new Event('input'));

    const btnCadastrar = fixture.debugElement.query(By.css('.btnPrint'));
    btnCadastrar.triggerEventHandler('click', null);

    expect(name.value).toBe(dataClient['name']);
    expect(email.value).toBe(dataClient['email']);
    expect(tel.value).toBe(dataClient['phone']);

    expect(street.value).toBe(dataAddress['street']);
    expect(number.value).toBe(dataAddress['number']);
    expect(district.value).toBe(dataAddress['district']);
    expect(city.value).toBe(dataAddress['city']);
    expect(cep.value).toBe(dataAddress['cep']);

    expect(manufacturer.value).toBe(dataVehicle['manufacturer']);
    expect(model.value).toBe(dataVehicle['model']);
    expect(parseInt(yearOfManufacturer.value, 10)).toEqual(dataVehicle['yearManufacturer']);
    expect(parseFloat(km.value)).toEqual(dataVehicle['km']);
    expect(plate.value).toBe(dataVehicle['plate']);

    expect(description.value).toBe(dataTask['description'])
    expect(parseFloat(price.value)).toEqual(dataTask['price'])

  }));

  it('should define addTask', () => {
    expect(component.addTasks).toBeDefined();
  });


  // xit('should add tasks ', () => {
  //   const result = component.addTasks(dataTask);
  //   expect(result).toContain(dataTask);
  // });

  // xit('should return array of tasks', () => {
  //   const result = component.addTasks(dataTask)
  //   expect(result.length).toBeGreaterThan(0)
  // })


});
