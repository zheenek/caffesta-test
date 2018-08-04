import React, { Component } from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Application from './components/App';
import PageA from './components/PageA';
import PageB from './components/PageB';

//const baseURL = process.env.PUBLIC_URL;

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div>
            <Route exact path="/" component={Application}/>
            <Route path="/a" component={PageA} />
            <Route path="/b" component={PageB} />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
