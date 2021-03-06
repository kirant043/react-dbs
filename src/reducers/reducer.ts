import { fromJS } from 'immutable';

import { actionTypes as at } from '../actions/users/constants';
import { UserAction } from '../actions/users/model';

const initialState = fromJS({
  users: [],
  isLoading: false,
  isFetched: false
});

export default (state = initialState, action: UserAction) => {
  switch (action.type) {
    case at.USERS_SAMPLE_FETCH:
      return state
        .set('isLoading', true)
        .set('isFetched', false)
        .set('users', initialState.get('users'));
    case at.USERS_SAMPLE_FETCH_SUCCESS:
      return state
        .set('isLoading', false)
        .set('isFetched', true)
        .set('users', action.payload);
    case at.USERS_SAMPLE_FETCH_ERROR:
      return state
        .set('isLoading', false)
        .set('isFetched', false)
        .set('users', initialState.get('users'));
    default:
      return state;
  }
};
