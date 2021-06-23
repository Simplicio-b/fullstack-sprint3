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
    this._alert.message = 'Buscando Produtos ...';
    const service = new ProductsService()

    service
      .allProducts()
      .then(products => {
        
        if(typeof(products) === "string") {
          this._alert.message = products; 
        }else {
          this._listaProducts.import(products)
          this._alert.message = "Produtos encontrados";
        }
        })
        .catch(err => {
          console.log(err)
          this._alert.message = err; 
        }) 
    
      // document.querySelector('.alert').style = "display: none"
      // console.log(document.querySelector('.alert'))
  }

  search(ths) {
    this._listaProducts.search(ths.value)
  }

}
