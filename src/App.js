import "./App.css";
import React, { useEffect } from "react";

import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import gameInfo from "./pages/gameInfo";
import CreateGame from "./pages/CreateGame";
import ActiveGame from "./pages/ActiveGame";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { logOut } from "../src/store/player/actions";
import { selectAppLoading } from "./store/appState/selectors";
import { selectPlayer } from "./store/player/selectors";

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const player = useSelector(selectPlayer);
  const isLoading = useSelector(selectAppLoading);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token || !player) {
      dispatch(logOut());
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
