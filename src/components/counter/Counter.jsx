import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../../store';

export function Counter() {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment)}>+</button>
      <button onClick={() => dispatch(decrement)}>-</button>
      <button onClick={() => dispatch(reset)}>reset</button>
    </>
  );
}
