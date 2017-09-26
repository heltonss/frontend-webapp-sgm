import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencybr'
})
export class CurrencybrPipe implements PipeTransform {

  transform(value: any): string {
    const formatCurrency = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRA' }).format(value);
    const replaceBRA = formatCurrency.replace('BRA', 'R$ ');
    return replaceBRA;
  }

}
