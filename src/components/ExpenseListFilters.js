import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';
import {
  setTextFilter,
  setSortByAmountFilter,
  setSortByDateFilter,
  setStartDateFilter,
  setEndDateFilter
} from '../actions/filters';


class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  }

  handleInputChange = (e, dispatch) => {
    dispatch(
      setTextFilter(e.target.value)
    );
  };
  
  handleSelectChange = (e, dispatch) => {
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

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(
      setStartDateFilter(startDate)
    );
    this.props.dispatch(
      setEndDateFilter(endDate)
    );
  }

  onFocusChange = (calendarFocused) => {
    this.setState((prevState) => ({ calendarFocused }));
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={(e) => this.handleInputChange(e, this.props.dispatch)}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={(e) => this.handleSelectChange(e, this.props.dispatch)}>
          <option value="date">date</option>
          <option value="amount">amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
          endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
          onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
          focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
          numberOfMonths={1}
          displayFormat={'DD/MM/YYYY'}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);