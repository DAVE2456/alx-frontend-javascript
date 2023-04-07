import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    // objct create
    this._amount = amount;
    this._currency = currency;
  }

  // methods
  displayFullPrice() {
    return (`${this.amount} ${this.currency.name} (${this.currency.code})`);
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }

  // setters
  set amount(newAmount) {
    this._amount = newAmount;
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) throw TypeError('currency must be an instance of Currency');
    this._currency = newCurrency;
  }

  // Getters
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }
}
