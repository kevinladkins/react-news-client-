import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStories } from '../actions';
import Header from './header';
import Navbar from './navbar';
import Home from './home';

class App extends Component {

  changeSection(section) {
    this.props.fetchStories(section)
  }

  render() {
    return (
      <BrowserRouter>
       <div>
          <Header />
          <Navbar changeSection={this.changeSection.bind(this)}/>
          <Switch>
            <Route path='/:section' component={Home } />
            <Route path='/' component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default connect(null, { fetchStories })(App)
