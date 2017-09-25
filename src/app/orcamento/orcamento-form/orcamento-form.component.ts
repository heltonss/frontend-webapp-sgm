import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Task } from './../../shared/model/task';

@Component({
  selector: 'app-orcamento-form',
  templateUrl: './orcamento-form.component.html',
  styleUrls: ['./orcamento-form.component.scss']
})
export class OrcamentoFormComponent implements OnInit {
  private form: FormGroup;
  private tasks: Task[];

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
        yearOfManufacturer: [''],
        km: [''],
        plate: ['']
      }),
      clientTasks: this.formBuilder.group({
        description: [''],
        price: ['']
      }),
      info: ['']
    })
  }

  addTasks(task: Task): Task[] {
    this.tasks.push(task);
    console.log(this.tasks[0]);
    return this.tasks;
  }

  onSubmit(form: FormGroup) {
    console.log(form.value);
  }
}
