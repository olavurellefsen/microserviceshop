import styled from 'styled-components';

export const ProductList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
`;

export const ProductEntry = styled.div`
    padding-bottom: 20px;
`;

export const ProductImage = styled.img`
`;

export const ProductName = styled.div`
    font-size: 16px;
    font-weight: bold;
    padding-bottom: 10px;
`;

export const ProductDescription = styled.div`
    font-style: italic;
`;

export const ProductCost = styled.div`
    font-weight: bold;
`;

export const ProductBitcoinAddress = styled.div`
    font-family: courier;
`;