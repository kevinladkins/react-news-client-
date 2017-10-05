import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './header'
import Home from './home'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <div>
          <Header />
          <Switch>
            <Route path='/index' component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
