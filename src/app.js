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
    amount: 130,
    createdAt: 3000
  })
);

store.dispatch(
  addExpense({
    description: 'Gas bill',
    note: 'Gas bill for February',
    amount: 240,
    createdAt: 3400
  })
);

store.dispatch(
  setTextFilter('wat')
);

setTimeout(() => {
  store.dispatch(setTextFilter('gas'))
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