import { GAME_STATE } from "./actions";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case GAME_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
