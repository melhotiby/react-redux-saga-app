import { takeEvery, call, fork, put } from "redux-saga/effects";
import {
  GET_USERS_REQUEST,
  // GET_USERS_SUCCESS,
  //getUsersRequest
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

function* watchGetUsersRequest() {
  yield takeEvery(GET_USERS_REQUEST, getUsers);
}

const userSagas = [fork(watchGetUsersRequest)];

export default userSagas;
