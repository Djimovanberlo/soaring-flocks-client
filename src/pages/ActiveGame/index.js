import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Col, Container, Row, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@apollo/react-hooks";

import { GET_GAME_BY_ID, GET_PLAYER_BY_TOKEN } from "../../graphql/queries";
import PlayerPanel from "./PlayerPanel/index";
import ScoreBoard from "./Scoreboard/index";
import PublicChat from "./PublicChat/index";
import TradePanel from "./TradePanel/index";
import { loginSuccess } from "../../store/player/actions";
import { storeGame } from "../../store/game/actions";
import { selectPlayer } from "../../store/player/selectors";
import { selectTradePlayer } from "../../store/tradePlayer/selectors";

export default function ActiveGame() {
  const dispatch = useDispatch();

  const tradePlayer = useSelector(selectTradePlayer);
  const player = useSelector(selectPlayer);
  const token = localStorage.getItem("token");

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
