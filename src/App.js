import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/products" render={() => 'Products'} />
          <Route exact path="/" render={() =>
            <div className="App">
              <header className="App-header">
                <p>
                  MicroserviceShop
                </p>
                <a
                  className="App-link"
                  href="/products"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The ultimate shopping experience
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
