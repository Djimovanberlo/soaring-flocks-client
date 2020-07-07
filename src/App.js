import "./App.css";
import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import gameInfo from "./pages/gameInfo";
import ActiveGame from "./pages/ActiveGame";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { selectAppLoading } from "./store/appState/selectors";

function App() {
  const isLoading = useSelector(selectAppLoading);

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
