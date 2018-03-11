import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

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

// =============== Expense Actions
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

const editExpense = (
  {
    id,
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  }
) => ({
  type: 'EDIT_EXPENSE',
  id,
  description,
  note,
  amount,
  createdAt
});

// =============== Filter Actions
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// =============== Expense Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'EDIT_EXPENSE':
      const updatedExpense = {
        description: action.description,
        note: action.note,
        amount: action.amount,
        createdAt: action.createdAt
      };
      return [
        ...state.filter(({ id }) => id !== action.id),
        updatedExpense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};

// =============== Filter Reducer
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

// =============== Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
  })
);

// =============== Store subscrbe
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// =============== Dispatching actions
const expenseOne = store.dispatch(addExpense({
  description: 'January Rent',
  note: 'This was the final payment for that address',
  amount: 54500,
  createdAt: 0
}));

const expenseTwo = store.dispatch(addExpense({
  description: 'February Rent',
  note: 'This was new payment for that address',
  amount: 244,
  createdAt: 0
}));

store.dispatch(
  removeExpense({ id: expenseOne.expense.id })
);

store.dispatch(
  editExpense(
    { 
      id: expenseTwo.expense.id,
      description: 'Coffee',
      note: 'One cup of delicious coffee',
      amount: 299,
      createdAt: 555
    })
);

console.log(expenseOne.expense.id);


const user = {
  name: 'Jen',
  age: 24
};

console.log({ ...user });