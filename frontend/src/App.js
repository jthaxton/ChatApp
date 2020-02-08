import React from 'react';
import './App.css';
import {
  Switch,
  Route
} from 'react-router-dom'
import Test from './components/test';


const App = ({ws}) => (
    <Switch>
      <Route exact path = "/" component={() => <Test ws={ws}/>} />
    </Switch>
);

export default App;
