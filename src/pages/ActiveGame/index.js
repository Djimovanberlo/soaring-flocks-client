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
// import PublicChat from "./PublicChat/index";
// import PrivateChat from "./PrivateChat/index";
import { useQuery, useSubscription } from "@apollo/react-hooks";

import { GET_GAME_BY_ID } from "../../graphql/queries";
import bugIcon from "../../images/icons/bugIcon.png";
import eggIcon from "../../images/icons/eggIcon.png";
import featherIcon from "../../images/icons/featherIcon.png";
import marketIcon from "../../images/icons/marketIcon.png";
import moneyCashIcon from "../../images/icons/moneyCashIcon.png";
import rareIcon from "../../images/icons/rareIcon.png";
import vPointIcon from "../../images/icons/vPointIcon.png";
import { inlineIconStyle, iconStyle } from "../../styles/imgStyles";
import PlayerPanel from "./PlayerPanel/index";
import ScoreBoard from "./Scoreboard/index";
import { selectTradePlayer } from "../../store/tradePlayer/selectors";
import PublicChat from "./PublicChat/index";
import { storeGame } from "../../store/game/actions";
import { selectToken } from "../../store/player/selectors";

export default function ActiveGame() {
  const token = useSelector(selectToken);
  const tradePlayer = useSelector(selectTradePlayer);

  const dispatch = useDispatch();
  const [tradePanelState, set_tradePanelState] = useState(true);

  const { data, error, loading } = useQuery(GET_GAME_BY_ID);

  const history = useHistory();
  useEffect(() => {
    if (!token) {
      history.push("/");
    }
  }, [token, history]);

  useEffect(() => {
    if (loading === false && data) {
      const { id, gameTitle, gameTime, gameTimePassed } = data.getGameById;
      dispatch(
        storeGame({
          id,
          gameTitle,
          gameTime,
          gameTimePassed,
        })
      );
    }
  }, [loading, data]);

  if (loading) return "Loading...";
  if (error) return <Alert variant="danger">Error! {error.message}</Alert>;
  // console.log("data:", data, "error:", error, "loading:", loading);
  // console.log("GAMEDATA", data.getGameById);

  const tradeControls = tradePlayer.tradeState ? (
    <TradePanel
      playerList={data.getGameById.players}
      traderId={tradePlayer.traderId}
      traderName={tradePlayer.traderName}
    />
  ) : (
    <PlayerPanel playerList={data.getGameById.players} />
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
          <h2>{data.getGameById.gameTitle}</h2>
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
          <ScoreBoard playerList={data.getGameById.players} />
        </Col>
        <Col>{tradeControls}</Col>
        <Col md={4}>
          <PublicChat />
        </Col>
      </Row>
    </>
  );
}
