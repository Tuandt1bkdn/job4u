import { SET_LOGIN, SET_INFO } from "./constants";

const initState = {
  todo: "",
  todos: [],
  login: false,
  information: "",
};

function reducer(state, action) {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        login: true,
      };
    case SET_INFO:
      return {
        ...state,
        information: action.payload,
      };
    default:
      throw new Error("Invalid action");
  }
}
export { initState };
export default reducer;
