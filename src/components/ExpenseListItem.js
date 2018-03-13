import React from 'react';

const ExpenseListItem = ({ optionKey, expense }) => (
  <div key={optionKey}>
    <h3>{expense.description}</h3>
    <p>{expense.amount}</p>
    <p>{expense.createdAt}</p>
  </div>
);

export default ExpenseListItem;