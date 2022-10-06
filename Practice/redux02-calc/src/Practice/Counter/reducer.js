import { INCREMENT, DECREMENT } from "./action";

const initialState = {
  counter:0
};

const CounterReducer = (state = 0,action ) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

export default  CounterReducer;