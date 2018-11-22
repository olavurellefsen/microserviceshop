import React from 'react';
import {
  ProductList,
  ProductEntry,
  ProductImage,
  ProductName,
  ProductPrice
} from './Product.style';

export const Products = () => (
  <ProductList>
    <ProductEntry>
      <ProductImage src='https://i.pinimg.com/originals/cd/0d/cf/cd0dcfff2fe57e3e2766871c64c56151.jpg' />
      <ProductName>Seyðarhøvd</ProductName>
      <ProductPrice>25 kr</ProductPrice>
    </ProductEntry>
  </ProductList>
);
