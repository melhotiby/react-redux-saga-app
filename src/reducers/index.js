import { combineReducers } from "redux";

import UserReducer from "./users";

export default combineReducers({
  // ## Generator Reducers
  users: UserReducer
});
