import {call,put, takeLatest} from 'redux-saga/effects';
import { getData } from './services/network';
import { requsetSuccess } from './apicallSlice';

function* ApiCallRequest () {
  
  const URL = "https://fakestoreapi.com/products";
  const data = yield getData(URL);
  console.log("@CC apiResponse",data);

  yield put(requsetSuccess({data}));
}


export function* requestWatcher () {
  yield takeLatest("ApiCall/request",ApiCallRequest)
}
