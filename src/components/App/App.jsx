import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from 'components/Header/Header';
import './normalize.scss';
import './App.scss';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          Home
        </Route>
        <Route path="/recipes/:id" exact>
          Recipes
        </Route>
        <Route path="*">404</Route>
      </Switch>
    </Router>
  );
}

export default App;
