import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div key={id}>
    {console.log(id)}
    <h3>{description}</h3>
    <p>{amount} - created: {createdAt}</p>
    <button onClick={(e) => {
      dispatch(
        removeExpense({ id })
      );
    }}>Remove</button>
  </div>
);

export default connect()(ExpenseListItem);