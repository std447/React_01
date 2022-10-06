import {all,fork} from 'redux-saga/effects'
import { watchAddNumAction } from '../Practice/Calculator03/saga'

export default function* rootSaga () {
  yield all([fork(watchAddNumAction)])
}