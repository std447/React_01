import {put, takeLatest} from 'redux-saga/effects';
import { addFailed, addSuccess } from './CalcSlice';

function* addNumberAction(actions) {
  try{
    console.log("Inside Saga", actions)
    const {num1,num2} = actions.payload;

    const result = +num1 + +num2;
    console.log({result});
    yield put(addSuccess({result}));
    return;
  }
  catch(e){
    yield put(addFailed())
  }
}

export function* watchAddNumAction() {
  yield takeLatest("CalculatorSlice03/add",addNumberAction);
}