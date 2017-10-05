import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './header';
import Navbar from './navbar';
import Home from './home';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <div>
          <Header />
          <Navbar />
          <Switch>
            <Route path='/index' component={Home} />
            <Route path='/:section' component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
