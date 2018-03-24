import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';

let setTextFilter,
    setSortByDateFilter,
    setSortByAmountFilter,
    setStartDateFilter,
    setEndDateFilter,
    wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  setSortByDateFilter = jest.fn();
  setSortByAmountFilter = jest.fn();
  setStartDateFilter = jest.fn();
  setEndDateFilter = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      setSortByDateFilter={setSortByDateFilter}
      setSortByAmountFilter={setSortByAmountFilter}
      setStartDateFilter={setStartDateFilter}
      setEndDateFilter={setEndDateFilter}
    />
  );
});

it('should render ExpenseListFilters corretly', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should render ExpenseListFilters with alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

it('should handle text change', () => {
  const value = 'rent';
  wrapper.find('input').simulate('change', { target: { value }});
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

it('should sort by date', () => {
  wrapper.setProps({
    filters: altFilters
  });
  const value = 'date';
  wrapper.find('select').simulate('change', { target: { value }});
  expect(setSortByDateFilter).toHaveBeenCalled();
});

it('should sort by amount', () => {
  const value = 'amount';
  wrapper.find('select').simulate('change', { target: { value }});
  expect(setSortByAmountFilter).toHaveBeenCalled();
});

it('should handle date changes', () => {
  const startDate = moment(0).add(4, 'years');
  const endDate = moment(0).add(8, 'years');
  wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
  expect(setStartDateFilter).toHaveBeenLastCalledWith(startDate);
  expect(setEndDateFilter).toHaveBeenLastCalledWith(endDate);
});

it('should handle date focus changes', () => {
  const calendarFocused = 'endDate';
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});