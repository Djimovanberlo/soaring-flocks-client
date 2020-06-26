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

export const storeTradePlayer = (tradePlayer) => {
  console.log("ACTION", tradePlayer);
  return {
    type: "TRADE_PLAYER",
    payload: tradePlayer,
  };
};
