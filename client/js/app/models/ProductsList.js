class ProductsList {

  constructor() {
    this._imutableproducts = [];
    this._products = [];
  }

  get products() {
    return [].concat(this._products);
  }

  import(products) {
    this._imutableproducts = products
    this._products = products
  } 

  clear() {
    this._products = [];
  }

  search(search) {
    const upper = str => str.toLocaleUpperCase()

    this._products = this._imutableproducts.filter(product => {
      if(upper(product.description).includes(upper(search))) {
        return product
      }
    })

  }

}
