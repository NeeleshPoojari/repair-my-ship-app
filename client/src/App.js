import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home.component';
import Register from './pages/Register.component';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component = {Home} ></Route>
        <Route exact path='/register' component = {Register} ></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
