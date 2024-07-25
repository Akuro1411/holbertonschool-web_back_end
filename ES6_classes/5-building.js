export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    this.sqft = sqft;
    if (this.constructor !== Building && typeof (this.evacuationWarningMessage) !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newNumber) {
    this._sqft = newNumber;
  }
  // evacuationWarningMessage() {} //If you write this function again the error won't be appear.}
}
