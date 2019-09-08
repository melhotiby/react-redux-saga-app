import axios from "axios";
import { USERS_INDEX_ENDPOINT } from "./Constants";

export const getUsers = () => {
  axios.get(USERS_INDEX_ENDPOINT, {
    params: {
      limit: 1000
    }
  });
};
