import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

import { Task } from './../../shared/model/task';

@Component({
  selector: 'app-orcamento-form',
  templateUrl: './orcamento-form.component.html',
  styleUrls: ['./orcamento-form.component.scss']
})
export class OrcamentoFormComponent implements OnInit {
  tasks: Task[] = [];
  form: FormGroup;
  isHasTasks = false;

  constructor(private formBuilder: FormBuilder) { }

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
      clientTasks: this.formBuilder.array([]),
      info: ['']
    });
  }

  addTasks(description: string, price: number) {
    this.isHasTasks = true;
    const clientTasks: any = this.form.controls['clientTasks'];
    const newTask = this.addForFormBuilder(description, price);
    clientTasks.push(newTask);
  }

  addForFormBuilder(description: string, price: number): FormGroup {
    return this.formBuilder.group({
      description: description,
      price: price
    })
  }

  onSubmit(form: FormGroup) {
    console.log(form.value);
  }
}
