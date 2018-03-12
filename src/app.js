import React from 'react';
import ReactDOM from 'react-dom';

import ExpensifyApp from './components/ExpensifyApp';
import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './scss/main.scss';

const store = configureStore();

store.dispatch(
  addExpense({
    description: 'Water Bill',
    note: 'My water bill for February',
    amount: 130,
    createdAt: 3000
  })
);

store.dispatch(
  addExpense({
    description: 'Gas bill',
    note: 'Gas bill for February',
    amount: 240,
    createAt: 3400
  })
);

store.dispatch(
  setTextFilter('wat')
);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(
  state.expenses,
  state.filters
);

console.log(visibleExpenses);

ReactDOM.render(<AppRouter />, root);