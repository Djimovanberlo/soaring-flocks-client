import React, { useEffect } from "react";
import "./App.css";

import { Switch, Route, Redirect } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import gameInfo from "./pages/gameInfo";
import CreateGame from "./pages/CreateGame";
import ActiveGame from "./pages/ActiveGame";
import SignUp from "./pages/SignUp";
import { useHistory, Link } from "react-router-dom";
import Login from "./pages/Login";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { GET_PLAYER_BY_TOKEN } from "./graphql/queries";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { logOut } from "../src/store/player/actions";
import { getPlayerWithStoredToken } from "./store/player/actions";
import { Jumbotron, Alert } from "react-bootstrap";
import { selectToken, selectPlayer } from "./store/player/selectors";
import { loginSuccess } from "../src/store/player/actions";
import { REFRESH_PLAYER } from "./graphql/queries";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);
  const token = localStorage.getItem("token");
  // const playerId = useSelector(selectPlayerId);
  const player = useSelector(selectPlayer);
  const history = useHistory();

  console.log("APP", token, player);

  useEffect(() => {
    if (!token || !player) {
      history.push("/login");
    }
  }, [token, player]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Switch>
        <Route exact path="/">
          <Redirect to="/gameInfo" />
        </Route>
        <Route path="/gameInfo" component={gameInfo} />
        {/* <Route path="/createGame" component={CreateGame} /> */}
        <Route path="/activeGame" component={ActiveGame} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
