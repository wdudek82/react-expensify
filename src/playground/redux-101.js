import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy = action.incrementBy;
      return {
        count: state.count + incrementBy
      };
    case 'DECREMENT':
      const decrementBy = action.decrementBy;
      return {
        count: state.count - decrementBy
      };
    case 'SET':
      const setTo = action.setTo;
      return {
        count: setTo
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  };
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// ACTION generators
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({ setTo = 0 } = {}) => ({
    type: 'SET',
    setTo
});

store.dispatch(incrementCount());

// unsubscribe();

store.dispatch(incrementCount({ incrementBy: 7 }));
store.dispatch(incrementCount());

store.dispatch(decrementCount());
store.dispatch(decrementCount());

store.dispatch(resetCount());

store.dispatch(incrementCount());

store.dispatch(setCount({ setTo: 1337 }));
store.dispatch(decrementCount({ decrementBy: 7 }));
