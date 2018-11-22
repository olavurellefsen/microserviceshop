import styled from "styled-components";

export const BasketList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  color: lightgray;
`;

export const BasketEntry = styled.div`
  padding-bottom: 20px;
`;

export const BasketImage = styled.img``;

export const BasketName = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 10px;
  color: white;
`;

export const BasketDescription = styled.div`
  font-style: italic;
`;

export const BasketCost = styled.div`
  font-weight: bold;
`;

export const BasketBitcoinAddress = styled.div`
  font-family: courier;
`;
