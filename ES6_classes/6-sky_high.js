import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super();
    this._sqft = sqft;
    this._floors = floors;
    this.floors = floors;
    this.sqft = sqft;
  }

  get floors() {
    return this._floors;
  }

  set floors(newFloor) {
    this._floors = newFloor;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    this._sqft = newSqft;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
