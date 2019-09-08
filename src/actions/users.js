export const GET_USERS_REQUEST = "users/get_users_request";
export const GET_USERS_SUCCESS = "users/get_users_success";
export const CREATE_USER_REQUEST = "users/create_user_request";

export const getUsersRequest = () => ({
  type: GET_USERS_REQUEST
});

export const getUsersSuccess = ({ items }) => ({
  type: GET_USERS_SUCCESS,
  payload: { items }
});

export const createUserRequest = ({ firstName, lastName }) => ({
  type: CREATE_USER_REQUEST,
  payload: { firstName, lastName }
});
