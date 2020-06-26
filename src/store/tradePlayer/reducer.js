import { LOG_OUT, LOGIN_SUCCESS, TOKEN_STILL_VALID } from "./actions";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case "TRADE_PLAYER":
      console.log(state);
      console.log("EVEN EEN TEKST", action.payload);
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
