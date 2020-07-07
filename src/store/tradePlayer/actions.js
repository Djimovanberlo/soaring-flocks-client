export const TRADE_PLAYER = "TRADE_PLAYER";

export const storeTradePlayer = (tradePlayer) => {
  return {
    type: TRADE_PLAYER,
    payload: tradePlayer,
  };
};
