import { all, fork } from "redux-saga/effects";
// Import individual sagas here
// import userSaga from './userSaga';
// import productSaga from './productSaga';

export default function* rootSaga() {
  yield all([
    // fork(userSaga),
    // fork(productSaga),
    // Add other sagas here
  ]);
}
