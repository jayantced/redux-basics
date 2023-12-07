import { useSelector, useDispatch } from 'react-redux';
import { counterAction } from '../store';
import classes from './Counter.module.css';

const Counter = () => {

  const dispatch = useDispatch();

  function incrementHandler() {
    dispatch(counterAction.increment());
  }

  function decrementHandler() {
    dispatch(counterAction.decrement());
  }

  function increaseHandler() {
    dispatch(counterAction.increase(5))
  }

  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter)

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
