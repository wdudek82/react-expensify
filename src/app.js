import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import ExpenseDashboardPage from './components/ExpenseDashboardPage';
import AppRouter from './routers/AppRouter';

import moment from 'moment';

import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter, setSortByAmountFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './scss/main.scss';

const store = configureStore();

store.dispatch(
  addExpense({
    description: 'Water Bill',
    note: 'My water bill for February',
    amount: 5200,
    createdAt: moment('19820511', 'YYYYMMDD').valueOf()
  })
);

store.dispatch(
  addExpense({
    description: 'Gas bill',
    note: 'Gas bill for February',
    amount: 4500,
    createdAt: moment('20060727', 'YYYYMMDD').valueOf()
  })
);

store.dispatch(
  addExpense({
    description: 'Water pump',
    note: 'Funny little water pump',
    amount: 23000,
    createdAt: moment('20150123', 'YYYYMMDD').valueOf()
  })
);

store.dispatch(
  addExpense({
    description: 'Rent',
    amount: 100500,
    createdAt: moment('19861118', 'YYYYMMDD').valueOf()
  })
);


// store.dispatch(
//   setTextFilter('water')
// );

// store.dispatch(
//   setSortByAmountFilter()
// );

// setTimeout(() => {
//   store.dispatch(setTextFilter('bill'))
// }, 3000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(
  state.expenses,
  state.filters
);

// console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

// ReactDOM.render(<AppRouter />, root);
ReactDOM.render(jsx, root);