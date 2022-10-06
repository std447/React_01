import {SUM, SUBSTRACT, MULTIPLY,DIVIDE} from './action';

const initialState = {
  add:0,
  substract:0,
  multiply:0,
  divide:0
}

const CalcReducer = (state = initialState,action) => {
  const {add,substract,multiply,divide} = state;
  
  switch(action.type){
    case SUM:
      return {...state,add:add+action.payload};
    case SUBSTRACT:
      return {...state,substract:substract+action.payload};
    case MULTIPLY:
      return {...state,multiply:multiply+action.payload};
    case DIVIDE:
      return {...state,divide:divide+action.payload};
    // case UpdateNum1:
    //   retrun{...state,num1:}
    default:
      return state;
  }
}

export default CalcReducer;