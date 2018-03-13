import React from 'react';

const ExpenseListItem = (props) => (
  <div key={props.optionKey}>
    <h2>{props.expense.description}</h2>
    <p>{props.expense.amount}</p>
    <p>{props.expense.createdAt}</p>
  </div>
);

export default ExpenseListItem;