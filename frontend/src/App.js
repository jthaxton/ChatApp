import React from 'react';
import './App.css';
import {
  Switch,
  Route
} from 'react-router-dom'
import Test from './components/test';


const App = () => (
    <Switch>
      <Route exact path = "/" component={Test} />
    </Switch>
);

export default App;
