import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Dashboard from 'components/Dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
