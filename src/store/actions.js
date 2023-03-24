import { SET_LOGIN, SET_INFO } from "./constants";

export const setLogin = (payload) => ({
  type: SET_LOGIN,
  payload,
});

export const setInfo = (payload) => ({
  type: SET_INFO,
  payload,
});
