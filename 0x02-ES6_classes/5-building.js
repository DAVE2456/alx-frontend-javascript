export default class Building {
  constructor(sqft) {
    // class extending Building method
    if (this.constructor !== Building && !this.evacuationWarningMessage)
     throw Error('Class extending Building must override evacuationWarningMessage');

    // Create objects
    this._sqft = sqft;
  }

  // Getters
  get sqft() {
    return this._sqft;
  }
}
