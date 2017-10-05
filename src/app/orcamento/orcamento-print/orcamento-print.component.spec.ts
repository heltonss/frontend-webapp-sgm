import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OrcamentoPrintComponent } from './orcamento-print.component';
import { By } from '@angular/platform-browser';
import { DataService } from './../../shared/data.service';
import { User } from './../../shared/model/user';
import { Address } from './../../shared/model/address';
import { Vehicle } from './../../shared/model/vehicle';
import { Task } from './../../shared/model/task';
import { Product } from './../../shared/model/product';

describe('OrcamentoPrintComponent', () => {
  let component: OrcamentoPrintComponent;
  let fixture: ComponentFixture<OrcamentoPrintComponent>;

  const dataClient = new User('Helton', 'souza silveira', '123.456.789-10', 'helton@heltonsouza.com.br', '11 1111-1111', '11 99999-9999');
  const dataAddress = new Address('dos sonhos', '100', 'District', 'City', '00000-000', 'SP');
  const dataVehicle = new Vehicle('Gol', 'Volkswagem', 2010, 1000, 'AAA 1234')
  const dataProduct = new Product('oleo', 'Óleo 15w40', 2, 23.30)
  const dataTask: Task[] = [];
  dataTask.push(new Task('Description', 2500))
  dataTask.push(new Task('Description', 2600))


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

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render data client', () => {
    fixture.detectChanges();

    const name = fixture.debugElement.query(By.css('.name')).nativeElement;
    name.value = dataClient.name;
    name.dispatchEvent(new Event('input'));

    const tel = fixture.debugElement.query(By.css('.tel')).nativeElement;
    tel.value = dataClient.phone;
    tel.dispatchEvent(new Event('input'));

    const cel = fixture.debugElement.query(By.css('.cel')).nativeElement;
    cel.value = dataClient.cellphone;
    cel.dispatchEvent(new Event('input'));

    const email = fixture.debugElement.query(By.css('.email')).nativeElement;
    email.value = dataClient.email;
    email.dispatchEvent(new Event('input'));

    expect(name.value).toContain(dataClient.name);
    expect(tel.value).toContain(dataClient.phone);
    expect(cel.value).toContain(dataClient.cellphone);
    expect(email.value).toContain(dataClient.email);
  });

  it('should render address of client', () => {
    const street = fixture.debugElement.query(By.css('.street')).nativeElement;
    street.value = dataAddress.street;
    street.dispatchEvent(new Event('input'));

    const district = fixture.debugElement.query(By.css('.district')).nativeElement;
    district.value = dataAddress.district;
    district.dispatchEvent(new Event('input'));

    const cep = fixture.debugElement.query(By.css('.cep')).nativeElement;
    cep.value = dataAddress.cep;
    cep.dispatchEvent(new Event('input'));

    const city = fixture.debugElement.query(By.css('.city')).nativeElement;
    city.value = dataAddress.city;
    city.dispatchEvent(new Event('input'));

    expect(street.value).toContain(dataAddress.street);
    expect(district.value).toContain(dataAddress.district);
    expect(cep.value).toContain(dataAddress.cep);
    expect(city.value).toContain(dataAddress.city);
  });

  xit('should render tasks ', () => {
    const taskDescription = fixture.debugElement.query(By.css('.taskDescription')).nativeElement;
    taskDescription.value = dataTask[0].description
    taskDescription.dispatchEvent(new Event('input'));

    const taskPrice = fixture.debugElement.query(By.css('.taskPrice')).nativeElement;
    taskPrice.value = dataTask[0].price
    taskPrice.dispatchEvent(new Event('input'));

    expect(taskDescription.value).toContain(dataTask[0].description);
    expect(taskPrice.value).toEqual(dataTask[0].price);
  });

  it('should render products', () => {
    const productQuantity = fixture.debugElement.query(By.css('.productQuantity')).nativeElement;
    productQuantity.value = dataProduct.quantity
    productQuantity.dispatchEvent(new Event('input'));

    const productDescription = fixture.debugElement.query(By.css('.productDescription')).nativeElement;
    productDescription.value = dataProduct.description
    productDescription.dispatchEvent(new Event('input'));

    const productPrice = fixture.debugElement.query(By.css('.productPrice')).nativeElement;
    productPrice.value = dataProduct.price
    productPrice.dispatchEvent(new Event('input'));

    const ProductsTotalPrice = fixture.debugElement.query(By.css('.ProductsTotalPrice')).nativeElement;
    ProductsTotalPrice.value = dataProduct.description
    ProductsTotalPrice.dispatchEvent(new Event('input'));

    const resutTotalPrice = productQuantity.value * productPrice.value;

    expect(productDescription.value).toContain(dataProduct.description);
    expect(productQuantity.value).toEqual(dataProduct.quantity);
    expect(productPrice.value).toEqual(dataProduct.price);
    expect(resutTotalPrice).toEqual(46.60);
  });


});
