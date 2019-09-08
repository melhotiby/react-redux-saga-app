import UserSagas from "./users";
import { all } from "redux-sage/effects";

export default function* rootSaga() {
  yield all([...UserSagas]);
}
