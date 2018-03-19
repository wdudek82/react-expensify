import moment from 'moment';

const expenses = [
  {
    id: '1',
    description: 'Gum',
    amount: 195,
    createdAt: 0,
    note: '',
  },
  {
    id: '2',
    description: 'Water Bill',
    amount: 100.95,
    createdAt: moment(0).add(2, 'days').valueOf(),
    note: 'First note',
  },
  {
    id: '3',
    description: 'Gas  Bill',
    amount: 200.95,
    createdAt: moment(0).subtract(8, 'days').valueOf(),
    note: 'First note',
  },
  {
    id: '4',
    description: 'Rent',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf(),
    note: '',
  },
  {
    id: '5',
    description: 'Credit Card',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf(),
    note: '',
  },
]

export default expenses;