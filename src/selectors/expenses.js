const getVisibleExpenses = (
  expenses,
  { text, sortBy, startDate, endDate }
) => {
  return expenses.filter(expense => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    
    const expenseDescription = expense.description.toLowerCase();
    const includesText = expenseDescription.includes(text.toLowerCase());

    return startDateMatch && endDateMatch && includesText;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount;
    }
  });
};

export default getVisibleExpenses;