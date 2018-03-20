import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import { create } from 'domain';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      note: props.expense ? props.expense.note : '',
      calendarFocused: false,
      error: ''
    };
  }

  handleSubmitForm = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setErrorMsg('Please provide description and amount.');
    } else {
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });  // passed from AddExpensePage
      this.setState(() => ({
        description: '',
        amount: 0,
        note: ''
      }));
    }
  };

  setErrorMsg = (msg) => {
    this.setState(() => ({ error: msg }));

    setTimeout(() => {
      this.setState(() => ({ error: undefined }))
    }, 2000);
  };

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onAmountChange = (e) => {
    let amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
    
  }

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  }

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  }

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  render() {
    return (
      <div>
        {
          this.state.error &&
          <h4 style={{color: 'red'}}>{this.state.error}</h4>
        }
        <form onSubmit={this.handleSubmitForm}>
          <div>
            <input
              type="text"
              placeholder="Description"
              autoFocus
              value={this.state.description}
              onChange={this.onDescriptionChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Amount"
              value={this.state.amount}
              onChange={this.onAmountChange}
            />
          </div>
          <SingleDatePicker
            date={this.state.createdAt} // momentPropTypes.momentObj or null
            onDateChange={date => this.onDateChange(date)} // PropTypes.func.isRequired
            focused={this.state.calendarFocused} // PropTypes.bool
            onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
            numberOfMonths={1}
            firstDayOfWeek={1}
            isOutsideRange={(day) => false}
            displayFormat={'DD MMM YYYY'}
          />
          <div>
            <textarea
              placeholder="Add a note for your expense (optional)"
              value={this.state.note}
              onChange={this.onNoteChange}
            ></textarea>
          </div>
          <input type="submit" value="Add Expense" />
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
