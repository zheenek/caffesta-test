import React, { Component } from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Application from './components/App';
import Page from './components/Page';

//const baseURL = process.env.PUBLIC_URL;

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route exact path="/" component={Application}/>
            <Route path="/a" render={() =>(<Page letter="A"/>)} />
            <Route path="/b" render={() =>(<Page letter="B"/>)} />
        </Switch>
      </Router>
    );
  }
}

export default App;
