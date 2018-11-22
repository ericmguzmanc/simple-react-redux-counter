import * as actionTypes from '../constants/counter.const';

export default function CounterApp(state = 0, action) {
  switch(action.type) {
    case actionTypes.INCREMENT:
      console.log(action);
      return  state + 1; 
      case actionTypes.DECREMENT:
      console.log(action);
      return state - 1;
    default:
      return state;
  }
}
