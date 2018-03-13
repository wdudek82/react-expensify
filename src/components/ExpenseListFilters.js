import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

const handleInputChange = (e, dispatch) => {
  dispatch(
    setTextFilter(e.target.value)
  );
};

const ExpenseListFilters = (props) => (
  <div>
    <input
      type="text"
      value={props.filters.text}
      onChange={(e) => handleInputChange(e, props.dispatch)}
    />
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);