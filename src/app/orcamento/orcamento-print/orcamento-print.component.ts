import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/shared/data.service';

@Component({
  selector: 'app-orcamento-print',
  templateUrl: './orcamento-print.component.html',
  styleUrls: ['./orcamento-print.component.scss']
})
export class OrcamentoPrintComponent implements OnInit {
  public orcamento: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getOrcamento();
  }

  getOrcamento() {
    // this.orcamento = this.dataService.serviceData.value;
  }

  orcamentoPrint(): void {
    window.print();
  }

}
