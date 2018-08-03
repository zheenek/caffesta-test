import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Application from './components/App';
import PageA from './components/PageA';
import PageB from './components/PageB';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div>
            <Route exact path="/" component={Application}/>
            <Route path="/a" component={PageA} />
            <Route path="/b" component={PageB} />
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
