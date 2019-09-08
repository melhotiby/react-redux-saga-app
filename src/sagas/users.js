import { takeEvery, takeLatest, call, fork, put } from "redux-saga/effects";
import {
  GET_USERS_REQUEST,
  CREATE_USER_REQUEST,
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
  } catch (e) {}
}

function* createUser(action) {
  try {
    yield call(api.createUser, {
      firstName: action.payload.firstName,
      lastName: action.payload.lastName
    });
    yield call(getUsers);
  } catch (e) {}
}

function* watchGetUsersRequest() {
  yield takeEvery(GET_USERS_REQUEST, getUsers);
}

function* watchCreateUserRequest() {
  yield takeLatest(CREATE_USER_REQUEST, createUser);
}

const userSagas = [fork(watchGetUsersRequest), fork(watchCreateUserRequest)];

export default userSagas;
