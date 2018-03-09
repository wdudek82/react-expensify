import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';

import ExpensifyApp from './components/ExpensifyApp';
import Projects from './components/Projects';
import About from './components/About';
import Menu from './components/Menu';

import 'normalize.css/normalize.css';
import './scss/main.scss';

const AddExpansePage = () => (
  <div>
    This is Add Expense Page
  </div>
);

const EditExpensePage = () => (
  <div>
    This is Edit Expense Page
  </div>
);

const HelpPage = () => (
  <div>
    This is Help Page
  </div>
);

const NotFoundPage = () => (
  <div>
    404! - <Link to="/">Go Home</Link>
  </div>
);

const routes = (
  <Router>
    <div>
      <Menu />
      <Switch>
        <Route exact path="/" component={ExpensifyApp} />
        <Route path="/create" component={AddExpansePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routes, root);