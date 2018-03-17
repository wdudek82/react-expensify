import moment from 'moment';

const getVisibleExpenses = (
  expenses,
  { text, sortBy, startDate, endDate }
) => {
  return expenses.filter(expense => {
    const createdAtMoment = moment(expense.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    
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