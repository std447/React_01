import { delay, put, takeLatest} from 'redux-saga/effects';

import {addSuccess,addFailed} from './slice';

function* addNumberAction(actions) {

  try{
    const {num1,num2} = actions.payload;

    const result = +num1 + +num2;
    yield put(addSuccess({result}));
    return;
  }catch(e){
    yield put(addFailed());
  }
}

export function* watchAddNumAction() {
  yield takeLatest("ReduxSagaFlowSlice/add",addNumberAction)
}