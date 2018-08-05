import React, { Component } from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Application from './components/App';
import Page from './components/Page';

//const baseURL = process.env.PUBLIC_URL;

class App extends Component {

  state = {
    letter: 'A',
  }

  renderA = () => this.state.letter==="B" ? this.setState({letter: "A"}) : this.setState({});
  renderB = () => this.state.letter==="A" ? this.setState({letter: "B"}) : this.setState({});

  render() {
    return (
      <Router>
        <Switch>
            <Route exact path="/" render={() => (<Application 
              letter={this.state.letter} 
              switchToA={this.renderA}
              switchToB={this.renderB}
              />)}/>
            <Route path="/a" render={() =>(<Page letter="A"/>)} />
            <Route path="/b" render={() =>(<Page letter="B"/>)} />
        </Switch>
      </Router>
    );
  }
}

export default App;
