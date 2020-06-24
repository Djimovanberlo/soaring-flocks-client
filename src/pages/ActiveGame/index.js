import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { login } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import PlayerScore from "./PlayerScore";
import Player from "./Player";
import TradePanel from "./TradePanel";
import PublicChat from "./PublicChat";
import PrivateChat from "./PrivateChat";
import { useQuery, useSubscription } from "@apollo/react-hooks";

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
    <PlayerPanel />
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
          <Col>
            <h2>Game Title</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h6>Turn X. Game ends in Y turns</h6>
            <Button variant="primary" onClick={handleClick}>
              Open trade
            </Button>
          </Col>
        </Row>
      </Container>
      <br></br>
      <Container fluid>
        <Row>
          <Col md={2}>
            <ScoreBoard playerList={playerList} />
          </Col>
          <Col>{tradeControls}</Col>
        </Row>
      </Container>
    </>
  );
}
