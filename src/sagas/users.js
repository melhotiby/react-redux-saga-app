import {
  takeEvery,
  takeLatest,
  take,
  call,
  fork,
  put
} from "redux-saga/effects";
import {
  GET_USERS_REQUEST,
  CREATE_USER_REQUEST,
  DELETE_USER_REQUEST,
  userError,
  getUsersSuccess
} from "../actions/users";

import * as api from "../api/users";

function* getUsers() {
  try {
    const response = yield call(api.getUsers);
    yield put(
      getUsersSuccess({
        items: response.data.data
      })
    );
  } catch (e) {
    yield put(
      userError({
        error: "An error occurred when fetching the users list"
      })
    );
  }
}

function* createUser(action) {
  try {
    yield call(api.createUser, {
      firstName: action.payload.firstName,
      lastName: action.payload.lastName
    });
    yield call(getUsers);
  } catch (e) {
    yield put(
      userError({
        error: "An error occurred when trying to create a user"
      })
    );
  }
}

function* deleteUser({ id }) {
  try {
    yield call(api.deleteUser, { id });
    yield call(getUsers);
  } catch (e) {
    yield put(
      userError({
        error: "An error occurred when trying to delete a user"
      })
    );
  }
}

function* watchGetUsersRequest() {
  yield takeEvery(GET_USERS_REQUEST, getUsers);
}

function* watchCreateUserRequest() {
  yield takeLatest(CREATE_USER_REQUEST, createUser);
}

function* watchDeleteUserRequest() {
  while (true) {
    const action = yield take(DELETE_USER_REQUEST);
    yield call(deleteUser, { id: action.payload.userId });
  }
}

const userSagas = [
  fork(watchGetUsersRequest),
  fork(watchCreateUserRequest),
  fork(watchDeleteUserRequest)
];

export default userSagas;
