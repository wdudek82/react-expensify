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


export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  }

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  
  onSortChange = (e) => {
    const selected = e.target.value;
    if (selected === 'date') {
      this.props.setSortByDateFilter()
    } else if (selected === 'amount') {
      this.props.setSortByAmountFilter();
    }
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDateFilter(startDate);
    this.props.setEndDateFilter(endDate);
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
          onChange={(e) => this.onTextChange(e)}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={(e) => this.onSortChange(e)}>
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

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch, props) => ({
  setTextFilter: (text) => {
    dispatch(
      setTextFilter(text)
    )
  },
  setSortByAmountFilter: () => {
    dispatch(
      setSortByAmountFilter()
    )
  },
  setSortByDateFilter: () => {
    dispatch(
      setSortByDateFilter()
    )
  },
  setStartDateFilter: (startDate) => {
    dispatch(
      setStartDateFilter(startDate)
    )},
  setEndDateFilter: (endDate) => {
    dispatch(
      setEndDateFilter(endDate)
    )
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);