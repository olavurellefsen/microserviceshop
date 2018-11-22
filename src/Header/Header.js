import React from 'react';
import { Container, StoreName, MenuContainer, MenuItem } from './Product.style';

export const Header = () =>
    <Container>
        <StoreName>
            MicroserviceShop
        </StoreName>
        <MenuContainer>
            <MenuItem>
                Products
            </MenuItem>
        </MenuContainer>
    </Container>