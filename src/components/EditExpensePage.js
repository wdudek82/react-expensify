import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses' 

const EditExpensePage = (props) => {
  const expenseId = props.match.params.id;
  return (
    <div>
      <h1>Edit Expense</h1>
      <ExpenseForm
        onSubmit={expense => {
          props.dispatch(
            editExpense(expenseId, expense)
          );
          props.history.push("/");
        }}
        expense={props.expense}
      />
      <button
        onClick={() => {
          props.dispatch(removeExpense({ id: expenseId }));
          props.history.push("/");
        }}
      >Remove</button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id == props.match.params.id
    )
  };
};

export default connect(mapStateToProps)(EditExpensePage);