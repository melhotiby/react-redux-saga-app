import axios from "axios";
import { USERS_INDEX_ENDPOINT } from "./Constants";

export const getUsers = () => {
  return axios.get(USERS_INDEX_ENDPOINT, {
    params: {
      limit: 1000
    }
  });
};

export const createUser = ({ firstName, lastName }) => {
  return axios.post(USERS_INDEX_ENDPOINT, {
    firstName: firstName,
    lastName: lastName
  });
};
