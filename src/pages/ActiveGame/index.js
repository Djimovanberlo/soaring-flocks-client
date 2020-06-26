import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { login } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col, Row, Alert } from "react-bootstrap";
import PlayerScore from "./PlayerScore";
import Player from "./Player";
import TradePanel from "./TradePanel";
import PublicChat from "./PublicChat";
import PrivateChat from "./PrivateChat";
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
import PlayerPanel from "./PlayerPanel";
import ScoreBoard from "./ScoreBoard";

export default function ActiveGame() {
  const [tradePanelState, set_tradePanelState] = useState(true);

  const { data, error, loading } = useQuery(GET_GAME_BY_ID);
  if (loading) return "Loading...";
  if (error) return <Alert variant="danger">Error! {error.message}</Alert>;
  // console.log("data:", data, "error:", error, "loading:", loading);
  console.log("PLAYERDATA", data);

  const tradeControls = tradePanelState ? (
    <PlayerPanel playerList={data.getGameById.players} />
  ) : (
    <TradePanel playerList={data.getGameById.players} />
  );

  const handleClick = (event) => {
    event.preventDefault();
    set_tradePanelState(!tradePanelState);
  };

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
        <Row>
          <h6>
            Turn {data.getGameById.gameTimePassed}. Game ends in{" "}
            {data.getGameById.gameTime - data.getGameById.gameTimePassed} turns
          </h6>
          <Button variant="primary" onClick={handleClick}>
            Open trade
          </Button>
        </Row>
      </Container>
      <br></br>
      <Row>
        <Col md={2}>
          <ScoreBoard playerList={data.getGameById.players} />
        </Col>
        <Col>{tradeControls}</Col>
      </Row>
    </>
  );
}
