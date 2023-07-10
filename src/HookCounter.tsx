import { useSelector, useDispatch } from "react-redux";
import { decreaseCounter, increaseCounter } from "./Actions/CounterAction";

function HookCounter(props) {
  const counter = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      Count: {counter}
      <button onClick={() => dispatch(increaseCounter())}>Increase</button>
      <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
    </div>
  );
}

export default HookCounter;
