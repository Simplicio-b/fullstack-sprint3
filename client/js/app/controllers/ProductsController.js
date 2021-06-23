class ProductsController {

  constructor() {
    let $ = document.querySelector.bind(document);

    this._listaProducts = new Bind(
      new ProductsList(),
      new ProductsView($('.main__products')),
      'import', 'clear', 'search' 
    );

    this._alert = new Bind(
      new Alert(),
      new AlertView($('#alertView')),
      'message'
    );

    this.allProducts();
  }

  allProducts() {
    const closeMessage = () => document.querySelector('.alert').style = "display: none;";

    this._alert.message = 'Buscando Produtos ...';
    const service = new ProductsService();

    service
      .allProducts()
      .then(products => {
        if(typeof(products) === "string") {
          this._alert.message = products; 
          setTimeout(closeMessage, 1000)
        }else {
          this._listaProducts.import(products);
          this._alert.message = "Produtos encontrados";
          setTimeout(closeMessage, 1000)
        }
      })
      .catch(err => {
        console.log(err);
          setTimeout(closeMessage, 1000);
          this._alert.message = err; 
        }); 
  }

  search(ths) {
    this._listaProducts.search(ths.value);
  }

}
