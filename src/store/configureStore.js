import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';

import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

import getVisibleExpenses from '../selectors/expenses';

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
    }),
    (
      typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    ),
    // applyMiddleware(logger)
  );

  return store;
}