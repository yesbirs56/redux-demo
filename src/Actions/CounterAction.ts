import { DECREASE, INCREASE } from "./types";

export function increaseCounter() {
  return { type: INCREASE };
}

export function decreaseCounter() {
  return { type: DECREASE };
}

export interface Action {
  type: string;
  payload?: any;
}
