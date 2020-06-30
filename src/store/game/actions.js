import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "./selectors";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

// export const ALL_PLAYERS = "ALL_PLAYERS";

export const storeGame = (gameState) => {
  console.log("ACTION", gameState);
  return {
    type: "GAME_STATE",
    payload: gameState,
  };
};
