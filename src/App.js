import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css'
import 'bulma/css/bulma.css'

import { Detail } from './pages/Detail';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/details/:id' component={Detail}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
