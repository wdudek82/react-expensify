import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      };
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      };
    case 'SET':
      const setTo = typeof action.setTo === 'number' ? action.setTo : 1;
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

function increment_counter(incrementBy = 1) {
  store.dispatch({
    type: 'INCREMENT',
    incrementBy
  });
}

function decrement_counter(decrementBy = 1) {
  store.dispatch({
    type: 'DECREMENT',
    decrementBy
  });
}

function reset_counter() {
  store.dispatch({
    type: 'RESET'
  });
}

function set_counter(setTo = 0) {
  store.dispatch({
    type: 'SET',
    setTo
  });
}

increment_counter();

// unsubscribe();

increment_counter(5);
increment_counter(7);

decrement_counter(3);
decrement_counter(2);

reset_counter();

increment_counter();

set_counter(1337);
decrement_counter(7);

