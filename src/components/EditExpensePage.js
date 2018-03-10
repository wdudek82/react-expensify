import React from 'react';

const EditExpensePage = (props) => {
  console.log(props);
  const id = props.match.params.id;

  return (
    <div>
      <h2>Editing id: {id}</h2>
      Edit Expense Page
    </div>
  );
};

export default EditExpensePage;