import "./App.css";
import { decreaseCounter, increaseCounter } from "./Actions/CounterAction";
import { connect } from "react-redux";
import store from "./store";
import { useEffect, useState } from "react";
import HookCounter from "./HookCounter";
import { INCREASE } from "./Actions/types";

function App(props) {
  const [count, setCount] = useState(10);
  return (
    <div className="App">
      Count: {props.count} <br />
      <br />
      <button onClick={props.increaseCounter}>Increase</button>
      <button onClick={props.decreaseCounter}>Decrease</button>
      <br />
      <br />
      <br />
      <HookCounter />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { count: state.counter };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
