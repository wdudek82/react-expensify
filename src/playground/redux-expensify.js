import { createStore, combineReducers } from 'redux';

// Actions needed
// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPONSE
// ---------------
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Reducers
const expensesReducerDefaultState =[];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const filterReducerDefaultState = {
  text: '',
  sortBy: 'date', // date of amount
  startDate: undefined,
  endDate: undefined
};
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
  })
);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

console.log(store.getState());

const demoState = {
  expensess: [{
    id: 'dafdsfsad',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date of amount
    startDate: undefined,
    endDate: undefined
  }
};


console.log('redux-expensify started..');