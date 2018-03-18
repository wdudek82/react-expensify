import moment from 'moment';
import {
  setTextFilter,
  setSortByDateFilter,
  setSortByAmountFilter,
  setStartDateFilter,
  setEndDateFilter
} from '../../actions/filters';

test('setTextFilter action is defined', () => {
  expect(setTextFilter).toBeDefined();
});

test('should generate set text action object for default value', () => {
  expect(setTextFilter()).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
});

test('should generate set text action object new value', () => {
  const text = 'example text filter';
  const result = setTextFilter(text);
  expect(result).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});

test('should generate set sort by date action object', () => {
  const action = setSortByDateFilter();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('should generate set sort by amount action object', () => {
  expect(setSortByAmountFilter()).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

test('should generate set start date action object', () => {
  const action = setStartDateFilter(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should generate set start date object with defaul value', () => {
  expect(setStartDateFilter()).toEqual({
    type: 'SET_START_DATE',
  });
});

test('should generate set end date action object', () => {
  const action = setEndDateFilter(moment(1000));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(1000)
  });
});
