import { actionTypes as at } from '../actions/users/constants';
import { fetchSuccess, fetchError } from '../actions/users/actions';
import { takeLatest, call, put } from 'redux-saga/effects';

const fetchData = (url: string, options: any) => {
  const fetchRequest = new Request(url, options);

  return fetch(fetchRequest)
    .then(response => response.json().then(result => ({ result })))
    .catch(error => ({ error }));
};

function* fetchUsersList() {
  const { result, error } = yield call(
    fetchData,
    `https://mysafeinfo.com/api/data?list=presidents&format=json`,
    { method: 'get' }
  );
  if (error) {
    yield put(fetchError(error));
  }
  yield put(fetchSuccess(result));
}

export default function* dataSaga() {
  try {
    yield [
      takeLatest(at.USERS_SAMPLE_FETCH, fetchUsersList),
    ];
  } catch (error) {
    return;
  }
}
