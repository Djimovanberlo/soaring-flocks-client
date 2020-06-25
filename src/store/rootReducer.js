import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import player from "./player/reducer";

export default combineReducers({
  appState,
  user,
  player,
});
