import { Action } from "../Actions/CounterAction";
import { DECREASE, INCREASE } from "../Actions/types";

let initialValue: number = 10;

export const counter = (state = initialValue, action: Action) => {
  //{type:DELETE,payload:{id:1}}
  switch (action.type) {
    case INCREASE:
      return ++state;
    case DECREASE:
      return --state;
    default:
      return state;
  }
};
