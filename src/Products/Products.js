import React, { Component } from 'react';
import { ProductList, ProductEntry, ProductImage, ProductName, ProductPrice } from './Product.style';

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch('http://35.197.240.22/api/article')
      .then(response => response.json())
      .then(data => this.setState({ hits: data.products }));
  }

  render() {
    const { products } = this.state;
    return (
      <ProductList>
        {products.map(product =>
          <ProductEntry key={product.id}>
            <ProductName>{product.name}</ProductName>
          </ProductEntry>
        )}
      </ProductList>
    )
  }
}

export default Products;