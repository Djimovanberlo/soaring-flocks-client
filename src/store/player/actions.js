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

// const tokenStillValid = (playerWithoutToken) => ({
//   type: TOKEN_STILL_VALID,
//   payload: playerWithoutToken,
// });

// export const signUp = (name, email, password) => {
//   return async (dispatch, getState) => {
//     dispatch(appLoading());
//     try {
//       const response = await axios.post(`${apiUrl}/signup`, {
//         name,
//         email,
//         password,
//       });

//       dispatch(loginSuccess(response.data));
//       dispatch(showMessageWithTimeout("success", true, "account created"));
//       dispatch(appDoneLoading());
//     } catch (error) {
//       if (error.response) {
//         console.log(error.response.data.message);
//         dispatch(setMessage("danger", true, error.response.data.message));
//       } else {
//         console.log(error.message);
//         dispatch(setMessage("danger", true, error.message));
//       }
//       dispatch(appDoneLoading());
//     }
//   };
// };

// export const login = (email, password) => {
//   return async (dispatch, getState) => {
//     // dispatch(appLoading()); // check validity of token
//     try {
//       // mutation
//       const response = await axios.post(`${apiUrl}/login`, {
//         email,
//         password,
//       });

//       dispatch(loginSuccess(response.data));
//       dispatch(showMessageWithTimeout("success", false, "welcome back!", 1500));
//       dispatch(appDoneLoading());
//     } catch (error) {
//       if (error.response) {
//         console.log(error.response.data.message);
//         dispatch(setMessage("danger", true, error.response.data.message));
//       } else {
//         console.log(error.message);
//         dispatch(setMessage("danger", true, error.message));
//       }
//       dispatch(appDoneLoading());
//     }
//   };
// };

// export const login = (email, password) => {
//   return async (dispatch, getState) => {
//     dispatch(appLoading());
//     try {
//       const response = await axios.post(`${apiUrl}/login`, {
//         email,
//         password,
//       });

//       dispatch(loginSuccess(response.data));
//       dispatch(showMessageWithTimeout("success", false, "welcome back!", 1500));
//       dispatch(appDoneLoading());
//     } catch (error) {
//       if (error.response) {
//         console.log(error.response.data.message);
//         dispatch(setMessage("danger", true, error.response.data.message));
//       } else {
//         console.log(error.message);
//         dispatch(setMessage("danger", true, error.message));
//       }
//       dispatch(appDoneLoading());
//     }
//   };
// };

// export const getPlayerWithStoredToken = () => {
//   return async (dispatch, getState) => {
//     // get token from the state
//     const token = selectToken(getState());

//     // if we have no token, stop
//     if (token === null) return;

//     dispatch(appLoading());
//     try {
//       // if we do have a token,
//       // check wether it is still valid or if it is expired
//       const response = await axios.get(`https://${apiUrl}/me`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       // token is still valid
//       dispatch(tokenStillValid(response.data));
//       dispatch(appDoneLoading());
//     } catch (error) {
//       if (error.response) {
//         console.log(error.response.message);
//       } else {
//         console.log(error);
//       }
//       console.log("ERROR", error);
//       // if we get a 4xx or 5xx response,
//       // get rid of the token by logging out
//       dispatch(logOut());
//       dispatch(appDoneLoading());
//     }
//   };
// };
