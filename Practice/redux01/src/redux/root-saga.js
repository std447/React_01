import {all,fork} from 'redux-saga/effects';
import { requestWatcher } from '../Practice/Api-calling/apicallSaga';

export default function* rootSaga(){
  yield all([fork(requestWatcher)]);
}