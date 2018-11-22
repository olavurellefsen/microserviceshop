import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './Products/Products';
import Login from './Login/Login.js';


import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/products" render={() => <Products />} />
          <Route path="/login" render={() => <Login />} />
          <Route exact path="/" render={() =>
            <div className="App">
              <header className="App-header">
                <p>
                  MicroserviceShop
                </p>
                <a
                  className="App-link"
                  href="/products"
                >
                  The ultimate shopping experience
                </a>
                <a
                  className="App-link"
                  href="/login"
                >
                  login
                </a>
              </header>
            </div>
          }
        />
        </Switch>
      </Router>
    );
  }
}

export default App;
