import { INCREMENT,DECREMENT } from "./action";

const initialState = {
  counter:0
}

const CounterReducer02 = (state = initialState, action) => {
  switch(action.type){
    case INCREMENT:
      return { ...state, counter:state.counter+1}
    case DECREMENT:
      return { ...state, counter:state.counter-1}
    default:
      return state;
  }
}

export default CounterReducer02