import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => {
  const expenses = (
    props.expenses.length === 0 ?
    <p>No expenses</p> :
    props.expenses.map((expense, index) => (
      <ExpenseListItem
        key={expense.id}
        {...expense}
      />
    )
  ));

  return (
    <div>
      {expenses}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);

// const ConnectedExpenseList = connect((state) => {
//   return {
//     expenses: state.expenses
//   };
// })(ExpenseList);
// 
// export default ConnectedExpenseList;