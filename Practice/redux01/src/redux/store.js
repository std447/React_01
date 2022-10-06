import {configureStore} from "@reduxjs/toolkit";
import reducer from './root-reducer'

import createSagaMiddleware from 'redux-saga'
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer,
  middleware:(getDefaultMiddleware) => [
    ...getDefaultMiddleware({thunk:false}),
    sagaMiddleware,
  ]
});

sagaMiddleware.run(rootSaga);