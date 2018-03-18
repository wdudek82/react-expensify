import selectExpenses from '../../selectors/expenses';
import moment from 'moment';

const expenses = [
  {
    id: '1',
    description: 'Gum',
    amount: 195,
    createdAt: 0,
    note: '',
  },
  {
    id: '2',
    description: 'Water Bill',
    amount: 100.95,
    createdAt: moment(0).add(2, 'days').valueOf(),
    note: 'First note',
  },
  {
    id: '3',
    description: 'Gas  Bill',
    amount: 200.95,
    createdAt: moment(0).subtract(8, 'days').valueOf(),
    note: 'First note',
  },
  {
    id: '4',
    description: 'Rent',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf(),
    note: '',
  },
  {
    id: '5',
    description: 'Credit Card',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf(),
    note: '',
  },
]

const defaultFilters = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

test('should filter by text value', () => {
  const filters = {
    ...defaultFilters,
    text: 'e'
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([
    expenses[4],
    expenses[1],
    expenses[3]
  ]);
});

test('should filter by startDate', () => {
  const filters = {
    ...defaultFilters,
    startDate: moment(0)
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([
    expenses[4],
    expenses[1],
    expenses[0]
  ]);
});

test('should sort by endDate', () => {
  const filters = {
    ...defaultFilters,
    endDate: moment(0)
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([
    expenses[0],
    expenses[3],
    expenses[2]
  ]);
});

test('should sort by date', () => {
  const filters = {
    ...defaultFilters,
    sortBy: 'date'
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([
    expenses[4],
    expenses[1],
    expenses[0],
    expenses[3],
    expenses[2]
  ]);
});

test('should sort by amount', () => {
  const filters = {
    ...defaultFilters,
    sortBy: 'amount'
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([
    expenses[3],
    expenses[4],
    expenses[2],
    expenses[0],
    expenses[1],
  ]);
});