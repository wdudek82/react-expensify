import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink exact to="/" activeClassName="nav-active">Dashboard</NavLink>
    <NavLink to="/create" activeClassName="nav-active">Create Expense</NavLink>
    <NavLink to="/help" activeClassName="nav-active">Help</NavLink>
  </header>
);

export default Header;