import React, { Component } from 'react';
import { ProductList, ProductEntry, ProductImage, ProductName, ProductDescription, ProductCost, ProductBitcoinAddress } from './Product.style';

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
      .then(data => this.setState({ products: data }));
  }

  render() {
    const { products } = this.state;
    return (
      <ProductList>
        {products.filter(product => product.id<10).map(product => {
          const imageurl = 'https://picsum.photos/300/200?image='+(product.id+106);
          return(
            <ProductEntry key={product.id}>
              <ProductName>{product.name}</ProductName>
              <ProductImage src={imageurl} />
              <ProductDescription>{product.description}</ProductDescription>
              <ProductCost>DKK {product.cost}</ProductCost>
              <ProductBitcoinAddress>Bitcoin address: {product.bitCoinAddress}</ProductBitcoinAddress>
            </ProductEntry>
          )
        }
        )}
      </ProductList>
    )
  }
}

export default Products;