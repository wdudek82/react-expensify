import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Menu = () => (
  <div>
    <h1>Expensify</h1>
    <NavLink exact to="/" activeClassName="nav-active">Dashboard</NavLink>
    <NavLink to="/create" activeClassName="nav-active">Create Expense</NavLink>
    <NavLink to="/edit" activeClassName="nav-active">Edit Expense</NavLink>
    <NavLink to="/help" activeClassName="nav-active">Help</NavLink>
  </div>
);

export default Menu;