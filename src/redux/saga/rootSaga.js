import { all, takeLatest } from 'redux-saga/effects'
import { userFetched } from '../ducks/transactions'
import { handleTransitions } from './handlers/gtransactions'


function* userWatcher() {
  yield takeLatest(userFetched.type, handleTransitions)
}

export function* watcherSaga() {
  yield all([userWatcher()])
}
