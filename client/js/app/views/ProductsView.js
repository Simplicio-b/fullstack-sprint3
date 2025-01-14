class ProductsView extends View {
  constructor(element) {
    super(element);
  }

  template(data) {
    const { _products } = data

    return `
      <div class="products__row">
        <ol class="products__list">
        ${_products.map(product => `
              <li class="products__card">
                <div class="card">
                  <img
                    class="card__img"
                    src="${product._image}"
                    alt="${product._description}"
                  />
                  <p class="card__description">
                    ${product._description}
                    18
                  </p>
                  <p class="card__price">R$ ${product._value}</p>
                </div>
              </li>
        `).join("")}
        </ol>
      </div>
    `
  }
}
