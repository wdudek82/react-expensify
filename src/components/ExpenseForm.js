import React from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';


class ExpenseForm extends React.Component {
  state = {
    description: '',
    amount: 0,
    createdAt: 0,
    note: ''
  }

  handleSubmitForm = (e) => {
    e.preventDefault();
    this.props.dispatch(
      addExpense({ ...this.state })
    );
    this.setState(() => ({
      description: '',
      amount: 0,
      createdAt: 0,
      note: ''
    }));
  };

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onAmountChange = (e) => {
    const amount = parseInt(e.target.value) || 0;
    this.setState(() => ({ amount }));
  }

  onDateChange = (e) => {
    const createdAt = parseInt(e.target.value) || 0;
    this.setState(() => ({ createdAt }));
  }

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  render() {
    return (
      <div>
        <h1>Add Expense</h1>
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
              type="number"
              placeholder="Amount"
              value={this.state.amount}
              onChange={this.onAmountChange}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Date"
              value={this.state.createdAt}
              onChange={this.onDateChange}
            />
          </div>
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

export default connect()(ExpenseForm);
