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

// =============== Expense Action Generators
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

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// =============== Filter Action Generators
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

const setSortByDateFilter = () => ({
  type: 'SORT_BY_DATE',
});

const setSortByAmountFilter = () => ({
  type: 'SORT_BY_AMOUNT'
});

const setStartDateFilter = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

const setEndDateFilter = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
}); 

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
      return state.map((expense) => {
          if (expense.id === action.id) {
            return {
              ...expense,
              ...action.updates
            };
          }
          return expense;
        });
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
  console.log(state);
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
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
    expenseTwo.expense.id,
    {
      description: 'Coffee & Cream',
      amount: 299,
      note: 'Great Coffee:)'
    })
);

store.dispatch(
  setTextFilter('Blableblu')
);

store.dispatch(
  setSortByAmountFilter()
);

store.dispatch(
  setStartDateFilter(998877)
);

store.dispatch(
  setEndDateFilter()
);

store.dispatch(
  setTextFilter('Omega')
);

console.log(expenseOne.expense.id);