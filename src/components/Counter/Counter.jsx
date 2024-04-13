import React, { useReducer, useState } from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);
  function reducer(state, action) {
    switch (action.type) {
      case 'INCREMENT_COUNT':
        return state + 1;
      case 'INCREMENT_INPUT_COUNT':
        console.log(action);
        return state + +action.payload;
      case 'DECREMENT_COUNT':
        return state - 1;
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, 0);
  function handleIcrementClick() {
    dispatch({
      type: 'INCREMENT_COUNT'
    });
  }

  function handleIcrementInputClick() {
    dispatch({
      type: 'INCREMENT_INPUT_COUNT',
      payload: value
    });
  }

  function handleDecrementClick() {
    dispatch({
      type: 'DECREMENT_COUNT'
    });
  }

  return (
    <div>
      Count: {state}
      <button onClick={handleIcrementClick}>Increment</button>
      <button onClick={handleDecrementClick}>Decrement</button>
      <div>
        <input type='number' value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={handleIcrementInputClick}>Increment</button>
      </div>
    </div>
  );
};

export default Counter;
