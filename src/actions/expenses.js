import database from '../firebase/firebase';

// Expense Action Generators
const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    database.ref('expenses')
      .push(expense)
      .then((ref) => {
        dispatch(addExpense({
          id: ref.key,
          ...expense
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export {
  addExpense,
  removeExpense,
  editExpense,
  startAddExpense
};