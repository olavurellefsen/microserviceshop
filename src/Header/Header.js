import React from "react";
import { Container, StoreName, MenuContainer, MenuItem } from "./Header.style";

export const Header = () => (
  <Container>
    <StoreName href="/">MicroserviceShop</StoreName>
    <MenuContainer>
      <MenuItem href="/products">Products</MenuItem>
      <MenuItem href="/login">Login</MenuItem>
      <MenuItem href="/basket">Basket</MenuItem>
    </MenuContainer>
  </Container>
);
