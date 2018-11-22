import React, { Component } from "react";
import {
  BasketList,
  BasketEntry,
  BasketName,
} from "./Basket.style";

class Basket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      basketlist: [
        { id: 1, name: "product 1" },
        { id: 2, name: "product 2" },
        { id: 3, name: "product 3" }
      ]
    };
  }

  componentDidMount() {
    // var basketUrl = '…8080:/rest/command/list';
    // fetch(basketUrl)
    //   .then(response => response.json())
    //   .then(data => this.setState({ basketlist: data }));
  }

  render() {
    const { basketlist } = this.state;
    return (
      <BasketList>
        {basketlist.map(basketItem => {
          return (
            <BasketEntry key={basketItem.id}>
              <BasketName>
                {basketItem.id} : {basketItem.name}
              </BasketName>
              {/* <BasketImage src={imageurl} /> */}
              {/* <BasketDescription>{product.description}</BasketDescription>
              <BasketCost>DKK {product.cost}</BasketCost> */}
              {/* <BasketBitcoinAddress>Bitcoin address: {product.bitCoinAddress}</BasketBitcoinAddress> */}
            </BasketEntry>
          );
        })}
      </BasketList>
    );
  }
}

export default Basket;
