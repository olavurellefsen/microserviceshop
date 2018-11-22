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
  
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password:'',
      token:''
    };
  }

  doLogin = (e, email, password, token) => {
    e.preventDefault();
    this.setState(email, email);
    this.setState(password, password);
    this.setState(token, token);
    this.props.history.push('/');
    console.log(this.state);
  }  


  render() {
    return (
      <Router>
        <Body>
          <Header email={this.state.email}/>
          <MainArea>
            <Switch>
              <Route exact path="/" render={() => <Products />} />
              <Route path="/products" render={() => <Products />} />
              <Route path="/login" render={() => <Login email={this.state.email} password={this.state.password} doLogin={this.doLogin} />} />
              <Route path="/basket" render={() => <Basket />} />
            </Switch>
          </MainArea>
        </Body>
      </Router>
    );
  }
}

export default App;
