import React from 'react';
import { connect } from 'react-redux';
import {
  setTextFilter,
  setSortByAmountFilter,
  setSortByDateFilter
} from '../actions/filters';

const handleInputChange = (e, dispatch) => {
  dispatch(
    setTextFilter(e.target.value)
  );
};

const handleSelectChange = (e, dispatch) => {
  const selected = e.target.value;
  if (selected === 'date') {
    dispatch(
      setSortByDateFilter()
    );
  } else if (selected === 'amount') {
    dispatch(
      setSortByAmountFilter()
    );
  }
}

const ExpenseListFilters = (props) => (
  <div>
    <input
      type="text"
      value={props.filters.text}
      onChange={(e) => handleInputChange(e, props.dispatch)}
    />
    <select
      value={props.filters.sortBy}
      onChange={(e) => handleSelectChange(e, props.dispatch)}>
      <option value="date">date</option>
      <option value="amount">amount</option>
    </select>
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);