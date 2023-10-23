import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import userSlice from "./ducks/userSlice"
import layoutSlice from "./ducks/layoutSlice";
import transactionSlice from "./ducks/transactions"
import { watcherSaga } from "./saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  layout: layoutSlice,
  user:userSlice,
  transactions:transactionSlice,
});

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});

sagaMiddleware.run(watcherSaga);

export default store;
