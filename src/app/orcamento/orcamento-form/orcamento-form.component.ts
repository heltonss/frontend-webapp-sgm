import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

import { Task } from './../../shared/model/task';
import { DataService } from 'app/shared/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orcamento-form',
  templateUrl: './orcamento-form.component.html',
  styleUrls: ['./orcamento-form.component.scss']
})
export class OrcamentoFormComponent implements OnInit {
  tasks: Task[] = [];
  products = [];
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private dataService: DataService, private router: Router) { }

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
      clientTasks: [this.tasks],
      products: [this.products],
      info: ['']
    });
  }

  addTasks(description: string, price: number) {
    const task: any = {
      description: description,
      price: price
    }

    return this.tasks.push(task)
  }

  deleteTask(id: number): Task[] {
    return this.tasks.splice(id);
  }

  addProduct(quantity: number, description: string, priceUnit: number) {
    const product: any = {
      quantity: quantity,
      description: description,
      priceUnit: priceUnit
    }

    return this.products.push(product)
  }

  deleteProduct(id: number): any[] {
    return this.products.splice(id);
  }

  isShowTableTasks(): boolean {
    return this.tasks.length > 0;
  }

  isShowTableProducts(): boolean {
    return this.products.length > 0;
  }

  onSubmit(orcamento: FormGroup) {
    console.log(orcamento.value);
    this.dataService.serviceData = orcamento;
    this.router.navigate(['/print'])
  }
}
