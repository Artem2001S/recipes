import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from 'components/Header/Header';
import HomePage from 'pages/HomePage';
import RecipePage from 'pages/RecipePage';
import NotFoundPage from 'pages/NotFoundPage';
import './App.scss';
import 'normalize.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/recipes/:id" exact>
            <RecipePage />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
