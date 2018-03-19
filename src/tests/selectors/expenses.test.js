import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

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