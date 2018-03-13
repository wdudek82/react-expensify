import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
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
    amount: 5200,
    createdAt: 3000
  })
);

store.dispatch(
  addExpense({
    description: 'Gas bill',
    note: 'Gas bill for February',
    amount: 4500,
    createdAt: 3400
  })
);

store.dispatch(
  setTextFilter('water')
);

setTimeout(() => {
  store.dispatch(setTextFilter('bill'))
}, 3000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(
  state.expenses,
  state.filters
);

console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

// ReactDOM.render(<AppRouter />, root);
ReactDOM.render(jsx, root);