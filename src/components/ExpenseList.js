import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';

const ExpenseList = (props) => {
  const expenses = props.expenses.map((expense, index) => (
    <ExpenseListItem
      key={`expense-${index}`}
      optionKey={`expense-${index}`}
      expense={expense}
    />
  ));

  return (
    <div>
      <h1>Expense List</h1>
      {expenses}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filters
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