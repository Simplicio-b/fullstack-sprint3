class ProductsService {
  constructor() {
    this._http = new HttpService();
  }

  async allProducts() {
    try {
      const data = await this._http.get('http://localhost:3000/api/products');

      return data.map(product => 
        new Product(
          product.description, 
          product.image, 
          product.value
        )
      );

    } catch (error) {
      return "Não foi possível obter todos os produtos!"
    }
  }

}
