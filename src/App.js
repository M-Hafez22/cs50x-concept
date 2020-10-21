import React from 'react';
import {BrowserRouter as Router, Switch, Route}from 'react-router-dom'
import Home from './Home'
import Week from './Week'
import './style/main.scss'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/week/:number' component={Week}/> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
