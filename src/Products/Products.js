import React, { Component } from 'react';
import { ProductList, ProductEntry, ProductName, ProductDescription, ProductCost, ProductBitcoinAddress } from './Product.style';
import products2 from '../data/sampleproducts';

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
    //const { products } = this.state;
    return (
      <ProductList>
        {products2.map(product =>
          <ProductEntry key={product.id}>
            <ProductName>{product.name}</ProductName>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductCost>{product.cost}</ProductCost>
            <ProductBitcoinAddress>{product.bitCoinAddress}</ProductBitcoinAddress>
          </ProductEntry>
        )}
      </ProductList>
    )
  }
}

export default Products;