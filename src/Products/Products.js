import React, { Component } from 'react';
import { ProductList, ProductEntry, ProductImage, ProductName, ProductDescription, ProductCost, ProductBitcoinAddress } from './Product.style';
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
      .then(data => this.setState({ products: data }));
  }

  render() {
    const { products } = this.state;
    console.log(products);
    return (
      <ProductList>
        {products.filter(product => product.id<10).map(product => {
          const imageurl = 'https://picsum.photos/300/200?image='+(product.id+100);
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