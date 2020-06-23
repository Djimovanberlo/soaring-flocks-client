import React, { useState, useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Col, Row, Form, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";

import bugIcon from "../../images/icons/bugIcon.png";
import eggIcon from "../../images/icons/eggIcon.png";
import featherIcon from "../../images/icons/featherIcon.png";
import marketIcon from "../../images/icons/marketIcon.png";
import moneyCashIcon from "../../images/icons/moneyCashIcon.png";
import rareIcon from "../../images/icons/rareIcon.png";
import vPointIcon from "../../images/icons/vPointIcon.png";
import { inlineIconStyle, iconStyle } from "../../styles/imgStyles";
import PublicChat from "./PublicChat";
import Player from "./Player";

import Trade from "./Trade";

export default function PlayerPanel(props) {
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
  return (
    <Row>
      <Col>
        {" "}
        <Player
          name={player.name}
          resources={player.resources}
          playerList={playerList}
        />
      </Col>
      <Col md={4}>
        <PublicChat />
      </Col>
    </Row>
  );
}
