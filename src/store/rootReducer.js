import { combineReducers } from "redux";
import appState from "./appState/reducer";
import player from "./player/reducer";
import tradePlayer from "./tradePlayer/reducer";
import gameState from "./game/reducer";

export default combineReducers({
  appState,
  player,
  tradePlayer,
  gameState,
});
