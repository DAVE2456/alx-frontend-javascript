export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    // constructor class building
    super(sqft);

    // create objects
    this._floors = floors;
  }

  // methods

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }

  // Getters
  get sqft() {
    return this._sqft;
  }

  get floors() {
    return this._floors;
  }
}
