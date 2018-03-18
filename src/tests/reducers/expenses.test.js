import expensesReducer from '../../reducers/expenses';

test('should setup default state', () => {
  const state = expensesReducer(undefined, '@@INIT');
  expect(state).toEqual([]);
});

test('should edit expense', () => {
  const expense = {
    id: '1',
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: ''
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(undefined, action);
  expect(state).toEqual([ expense ]); 
});

test('should update expense', () => {
  const id = '2';
  const prevState = [{
    id,
    description: 'Water Bill',
    amount: 1234.56,
    createdAt: 1500,
    note: ''
  }];
  const updates = {
    id,
    description: 'Gas Bill',
    amount: 1200.59,
    createdAt: 1600,
    note: 'till end of month'
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id,
    updates
  };
  const state = expensesReducer(prevState, action);
  expect(state).toEqual([updates]);
});

test('should remove expense', () => {
  const id = '2';
  const prevState = [{
    id,
    description: 'Rent',
    amount: 109500,
    createdAt: 1500,
    note: ''
  },
  {
    id: '3',
    description: 'Gas Bill',
    amount: 1200.59,
    createdAt: 1600,
    note: 'till end of month'
  }];
  const action = {
    type: 'REMOVE_EXPENSE',
    id
  };
  const state = expensesReducer(prevState, action);
  expect(state).toEqual([ prevState[1] ]);
});