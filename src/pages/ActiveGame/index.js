import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { login } from "../../store/user/actions";
// import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col, Row, Alert } from "react-bootstrap";
// import PlayerScore from "./Scoreboard/PlayerScore";
// import Player from "./PlayerPanel/Player";
import TradePanel from "./TradePanel/index";
import { GET_PLAYER_BY_TOKEN } from "../../graphql/queries";
// import PublicChat from "./PublicChat/index";
// import PrivateChat from "./PrivateChat/index";
import { useQuery, useSubscription } from "@apollo/react-hooks";

import { GET_GAME_BY_ID } from "../../graphql/queries";
import { apiUrl } from "../../config/constants";
import bugIcon from "../../images/icons/bugIcon.png";
import eggIcon from "../../images/icons/eggIcon.png";
import featherIcon from "../../images/icons/featherIcon.png";
import marketIcon from "../../images/icons/marketIcon.png";
import moneyCashIcon from "../../images/icons/moneyCashIcon.png";
import { loginSuccess } from "../../store/player/actions";
import rareIcon from "../../images/icons/rareIcon.png";
import vPointIcon from "../../images/icons/vPointIcon.png";
import { inlineIconStyle, iconStyle } from "../../styles/imgStyles";
import PlayerPanel from "./PlayerPanel/index";
import ScoreBoard from "./Scoreboard/index";
import { selectTradePlayer } from "../../store/tradePlayer/selectors";
import { selectPlayer } from "../../store/player/selectors";
import PublicChat from "./PublicChat/index";
import { storeGame } from "../../store/game/actions";
import { selectToken } from "../../store/player/selectors";

export default function ActiveGame() {
  // const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const [tradePanelState, set_tradePanelState] = useState(true);
  const tradePlayer = useSelector(selectTradePlayer);
  const player = useSelector(selectPlayer);
  const token = localStorage.getItem("token");
  console.log("PLAYER", player);
  console.log("REFRESH TOKEN", token);
  const history = useHistory();
  useEffect(() => {
    if (!token || !player) {
      history.push("/login");
    }
  }, [token, player]);

  const {
    data: data_player,
    loading: loading_player,
    error: error_player,
  } = useQuery(GET_PLAYER_BY_TOKEN, {
    variables: {
      token,
    },
  });

  useEffect(() => {
    if (loading_player === false && data_player) {
      dispatch(loginSuccess(data_player.getPlayerByToken));
    }
  }, [loading_player, data_player]);

  // if (loading_game) return "Loading...";
  // if (error_game)
  //   return <Alert variant="danger">Error! {error_game.message}</Alert>;

  console.log(
    "playerData:",
    data_player,
    "error:",
    error_player,
    "loading:",
    loading_player
  );

  const {
    data: data_game,
    error: error_game,
    loading: loading_game,
  } = useQuery(GET_GAME_BY_ID);

  useEffect(() => {
    if (loading_game === false && data_game) {
      const { id, gameTitle, gameTime, gameTimePassed } = data_game.getGameById;
      dispatch(
        storeGame({
          id,
          gameTitle,
          gameTime,
          gameTimePassed,
        })
      );
    }
  }, [loading_game, data_game]);

  if (loading_game || loading_player) return "Loading...";
  if (error_game)
    return <Alert variant="danger">Error! {error_game.message}</Alert>;
  console.log(
    "Gamedata:",
    data_game,
    "error:",
    error_game,
    "loading:",
    loading_game
  );
  // console.log("GAMEDATA", data.getGameById);

  const tradeControls = tradePlayer.tradeState ? (
    <TradePanel
      playerList={data_game.getGameById.players}
      traderId={tradePlayer.traderId}
      traderName={tradePlayer.traderName}
    />
  ) : (
    <PlayerPanel playerList={data_game.getGameById.players} />
  );

  return (
    <>
      <Container
        style={{ textAlign: "center" }}
        as={Col}
        md={{ span: 2, offset: 5 }}
        className="mt-5"
      >
        <Row>
          <h2>{data_game.getGameById.gameTitle}</h2>
        </Row>
        {/* <Row>
          <h6>
            Turn {data.getGameById.gameTimePassed}. Game ends in{" "}
            {data.getGameById.gameTime - data.getGameById.gameTimePassed} turns
          </h6>
        </Row> */}
      </Container>
      <br></br>
      <Row>
        <Col md={2}>
          <ScoreBoard playerList={data_game.getGameById.players} />
        </Col>
        <Col>{tradeControls}</Col>
        <Col md={4}>
          <PublicChat />
        </Col>
      </Row>
    </>
  );
}
