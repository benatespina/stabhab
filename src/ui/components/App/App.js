import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './../Home/Home';
import Event from './../Event/Event';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Route path="/" exact component={Home} />
          <Route path="/event/:eventSlug" component={Event} />
        </>
      </Router>
    );
  }
}

export default App;
