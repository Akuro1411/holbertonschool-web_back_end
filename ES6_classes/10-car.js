export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    // const Object = this.constructor[Symbol.species];
    // return new Object(this._brand, this._motor, this._color);
    return new this.constructor[Symbol.species](this._brand, this._motor, this._color);
    // You can write return with this type, too.
  }
}
