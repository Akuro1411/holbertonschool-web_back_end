export default class HolbertonClass {
  constructor(size, location) {
    this._location = location;
    this._size = size;
  }

  [Symbol.toPrimitive](func) {
    if (func === 'string') {
      return this._location;
    }
    if (func === 'number') {
      return this._size;
    }
    return 1;
  }
}
