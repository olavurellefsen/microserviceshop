import React from "react";
import { Container, StoreName, MenuContainer, MenuItem } from "./Header.style";

export const Header = ({ email }) =>
    <Container>
        <StoreName href="/">MicroserviceShop</StoreName>
        <MenuContainer>
        <MenuItem href="/products">Products</MenuItem>
        {email==='' &&
            <MenuItem href="/login">Login</MenuItem>
        }
        {email!=='' &&
            <MenuItem>{email}</MenuItem>
        }        
        <MenuItem href="/basket">Basket</MenuItem>
        </MenuContainer>
    </Container>