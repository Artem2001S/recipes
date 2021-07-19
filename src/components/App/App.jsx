import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from 'components/Header/Header';
import './normalize.scss';
import './App.scss';
import HomePage from 'pages/HomePage';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/recipes/:id" exact></Route>
          <Route path="*">404</Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
