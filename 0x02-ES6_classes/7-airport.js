
export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }

    // create codenand name val
    this._name = name;
    this._code = code;
  }

  // Methods
  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }
}
