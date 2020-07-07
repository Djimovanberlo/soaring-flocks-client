import { TRADE_PLAYER } from "./actions";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case TRADE_PLAYER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
