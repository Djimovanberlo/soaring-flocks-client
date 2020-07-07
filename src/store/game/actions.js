export const GAME_STATE = "GAME_STATE";

export const storeGame = (gameState) => {
  return {
    type: GAME_STATE,
    payload: gameState,
  };
};
