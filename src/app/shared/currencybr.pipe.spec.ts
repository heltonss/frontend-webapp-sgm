import { CurrencybrPipe } from './currencybr.pipe';

describe('CurrencybrPipe', () => {
  let pipe: CurrencybrPipe;

  beforeEach(() => {
    pipe = new CurrencybrPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return a currency br ', () => {
    expect(pipe.transform(10)).toEqual('R$ 10,00')
  });

});
