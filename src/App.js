import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./Products/Products";
import Login from "./Login/Login";
import { Header } from "./Header/Header";
import Basket from "./Basket/Basket";

import "./App.css";
import styled from "styled-components";

const Body = styled.div`
  background-image: url("/background.jpg");
  background-repeat: repeat-y;
  min-height: 100vh;
`;
const MainArea = styled.div``;

class App extends Component {
  render() {
    return (
      <Router>
        <Body>
          <Header />
          <MainArea>
            <Switch>
              <Route exact path="/" render={() => <Products />} />
              <Route path="/products" render={() => <Products />} />
              <Route path="/login" render={() => <Login />} />
              <Route path="/basket" render={() => <Basket />} />
            </Switch>
          </MainArea>
        </Body>
      </Router>
    );
  }
}

export default App;
