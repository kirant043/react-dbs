import { fork, all } from 'redux-saga/effects';

import dataSaga from './sagas/saga';

const sagas = [
  dataSaga
  // NOTE: put other app sagas here
];

function* globalSagas() {
  const globalSagasForks = sagas.map((saga) => fork(saga));

  yield all([...globalSagasForks]);
}

export default globalSagas;
