// src/components/Counter.js
import "./Counter.css";
import { useDispatch, useSelector } from "react-redux";
import { addOne, minusOne, changeCounter } from "../slices/CounterSlices";

function Counter() {
  const dispatch = useDispatch();

  const countr = useSelector((state) => state.counter.counter);

  console.log(countr);

  return (
    <div className="counter-container">
      <div className="counter-display">
        <h1>Counter: {countr}</h1>
      </div>
      <div className="counter-input">
        <input
          type="number"
          value={countr}
          onChange={(e) => dispatch(changeCounter(Number(e.target.value)))}
          placeholder="Set counter value"
        />
      </div>
      <div className="counter-buttons">
        <button
          onClick={() =>
            dispatch(
              addOne({
                name: " bilal",
                age: 23,
              })
            )
          }
        >
          Increment
        </button>
        <button onClick={() => dispatch(minusOne())}>Decrement</button>
      </div>
    </div>
  );
}

export default Counter;
