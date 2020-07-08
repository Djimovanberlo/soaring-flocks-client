export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const TOKEN_STILL_VALID = "TOKEN_STILL_VALID";
export const LOG_OUT = "LOG_OUT";

export const loginSuccess = (playerWithToken) => {
  return {
    type: LOGIN_SUCCESS,
    payload: playerWithToken,
  };
};

export const logOut = () => ({ type: LOG_OUT });
