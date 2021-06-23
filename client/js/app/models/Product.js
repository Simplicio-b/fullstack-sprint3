class Product {
  
  constructor(description, image, price) {
    this._image = image;
    this._description = description;
    this._value = price;
    Object.freeze(this)
  }

  get description() {
    return this._description;
  }

  get image() {
    return this._image;
  }

  get price() {
    return this._value;
  }

}
