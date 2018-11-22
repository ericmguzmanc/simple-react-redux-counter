import * as actionTypes from '../constants/counter.const';

export function increment() {
  return {
    type: actionTypes.INCREMENT
  }
}

export function decrement() {
  return {
    type: actionTypes.DECREMENT
  }
}