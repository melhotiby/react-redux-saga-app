import { takeEvery, call, fork } from "redux-sage/effects";
import {
  GET_USERS_REQUEST
  // GET_USERS_SUCCESS,
  // getUsersRequest,
  // getUsersSuccess
} from "../actions/users";

import * as api from "../api/users";

function* getUsers() {
  try {
    const results = yield call(api.getUsers);
    console.log(results);
  } catch (e) {}
}

function* watchGetUsersRequest() {
  yield takeEvery(GET_USERS_REQUEST, getUsers);
}

const userSagas = [fork(watchGetUsersRequest)];

export default userSagas;
