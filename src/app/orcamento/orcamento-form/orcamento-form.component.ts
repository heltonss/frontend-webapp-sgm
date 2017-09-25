import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-orcamento-form',
  templateUrl: './orcamento-form.component.html',
  styleUrls: ['./orcamento-form.component.scss']
})
export class OrcamentoFormComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      clientData: this.formBuilder.group({
        name: [null],
        email: [null],
        tel: [null]
      }),
      clientAddress: this.formBuilder.group({
        street: [''],
        number: [''],
        district: [''],
        city: [''],
        cep: ['']
      }),
      clientVehicle: this.formBuilder.group({
        manufacturer: [''],
        model: [''],
        yearOfManufacturer: [null],
        km: [null],
        plate: ['']
      }),
      clientTasks: this.formBuilder.group({
        description: [''],
        price: [null]
      }),
      info: ['']
    })
  }

  onSubmit(form: FormGroup) {
    console.log(form.value);
  }
}
