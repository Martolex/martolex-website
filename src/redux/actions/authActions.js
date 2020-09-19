import { post } from "../../utils/requests";
import { loginApi } from "../../utils/endpoints";
import { startLoading, finishLoading } from "./LoadingActions";

export const LOGIN = "LOGIN";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGOUT = "LOGOUT";
const login = (data) => ({
  type: LOGIN,
  payload: data,
});

const invalidLogin = (error) => ({
  type: LOGIN_FAILED,
  payload: error,
});

export const loginUser = (email, password) => async (dispatch) => {
  dispatch(startLoading("auth"));
  try {
    const [user] = await post(loginApi, false, { email, password });
    dispatch(login(user));
    dispatch(finishLoading("auth"));
  } catch (err) {
    console.error(err);
    dispatch(invalidLogin(err));
  }
};

export const logout = () => ({ type: LOGOUT });
