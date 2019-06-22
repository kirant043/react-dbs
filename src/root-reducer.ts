import { combineReducers } from 'redux-immutable';

import usersReducer from './reducers/reducer';

export interface State {
  usersDomain: any;
}

export const state = combineReducers({
  usersDomain: usersReducer
});
