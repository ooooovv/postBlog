import { combineReducers } from 'redux';
import auth from './auth';
import loading from './loading';
import user, { userSaga } from './user';
import { all } from 'redux-saga/effects';
import { authSaga } from './auth';
import write, { writeSaga } from './write';
import post, { postSaga } from './post';
import posts, { postsSaga } from './posts';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  write,
  post,
  posts,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), writeSaga(), postSaga(), postsSaga()]);
}

export default rootReducer;
