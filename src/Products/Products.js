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
      <ProductImage>Mynd av seyðarhøvdi</ProductImage>
      <ProductName>Seyðarhøvd</ProductName>
      <ProductPrice>25 kr</ProductPrice>
    </ProductEntry>
  </ProductList>
);
