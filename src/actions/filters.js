// =============== Filter Action Generators
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

const setSortByDateFilter = () => ({
  type: 'SORT_BY_DATE',
});

const setSortByAmountFilter = () => ({
  type: 'SORT_BY_AMOUNT'
});

const setStartDateFilter = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

const setEndDateFilter = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});

export {
  setTextFilter,
  setSortByDateFilter,
  setSortByAmountFilter,
  setStartDateFilter,
  setEndDateFilter
};