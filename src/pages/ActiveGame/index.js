import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { login } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import PlayerCard from "./PlayerCard";
import Player from "./Player";
import TradePanel from "./TradePanel";
import PublicChat from "./PublicChat";
import { useQuery, useSubscription } from "@apollo/react-hooks";

import bugIcon from "../../images/icons/bugIcon.png";
import eggIcon from "../../images/icons/eggIcon.png";
import featherIcon from "../../images/icons/featherIcon.png";
import marketIcon from "../../images/icons/marketIcon.png";
import moneyCashIcon from "../../images/icons/moneyCashIcon.png";
import rareIcon from "../../images/icons/rareIcon.png";
import vPointIcon from "../../images/icons/vPointIcon.png";
import { inlineIconStyle, iconStyle } from "../../styles/imgStyles";

import {
  GET_PLAYERS_WITH_RESOURCES,
  GET_PLAYER_BY_ID,
} from "../../graphql/queries";

export default function ActiveGame() {
  // const { data, error, loading } = useSubscription(GET_PLAYERS_WITH_RESOURCES);
  const { data, error, loading } = useQuery(GET_PLAYERS_WITH_RESOURCES);
  console.log(data, error, loading);

  const playerList = [
    {
      id: 1,
      name: "Pietje",
      vPoints: 2,
    },
    {
      id: 2,
      name: "Wolla",
      vPoints: 3,
    },
    {
      id: 3,
      name: "Djimo",
      vPoints: 5,
    },
  ];

  const player = {
    id: 1,
    name: "Djimo",
    resources: {
      moneyCash: 9,
      egg: 0,
      feather: 2,
      bug: 1,
      vPoints: 5,
      mMarket: 2,
      rMarket: 1,
      vMarket: 1,
    },
  };
  const [tradePanelState, set_tradePanelState] = useState(true);
  const tradeControls = tradePanelState ? (
    <TradePanel playerList={playerList} />
  ) : (
    <Player
      name={player.name}
      resources={player.resources}
      playerList={playerList}
    />
  );

  const handleClick = (event) => {
    event.preventDefault();
    set_tradePanelState(!tradePanelState);
  };

  return (
    <>
      <Container as={Col} md={{ span: 6, offset: 5 }} className="mt-5">
        <Row>
          <Col>
            <h2>Game Title</h2>
          </Col>
        </Row>
      </Container>
      <Container style={{ textAlign: "center" }}>
        <Row>
          <Col>
            <h6>Turn X. Game ends in Y turns</h6>
            <Button variant="primary" onClick={handleClick}>
              Open trade
            </Button>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <p style={{ textAlign: "center" }}>Scoreboard</p>
            {playerList.map((listPlayer) => {
              return (
                <PlayerCard
                  key={listPlayer.id}
                  name={listPlayer.name}
                  vPoints={listPlayer.vPoints}
                />
              );
            })}
          </Col>
          <Col sm={7}>
            <p>{player.name}</p>
            {tradeControls}
          </Col>
          <Col>
            <p style={{ textAlign: "center" }}>Chatbox</p>
            <PublicChat />
          </Col>
        </Row>
      </Container>
    </>
  );
}
