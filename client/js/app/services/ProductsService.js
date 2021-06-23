class ProductsService {
  constructor() {
    this._http = new HttpService();
  }

  allProducts() {
    return this._http
      .get('http://localhost:3000/api/products')
        .then(products => products.map(product => 
          new Product(
            product.description, 
            product.image, 
            product.value
          ))
        )
        .catch(() => 
          "Não foi possível obter todos os produtos!"
        );
  }

}
