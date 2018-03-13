import React from 'react';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div key={id}>
    {console.log(id)}
    <h3>{description}</h3>
    <p>{amount} - created: {createdAt}</p>
  </div>
);

export default ExpenseListItem;