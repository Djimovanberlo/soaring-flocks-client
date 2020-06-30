import React, { useState, useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Col, Row, Form, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";

import { inlineIconStyle, iconStyle } from "../../../styles/imgStyles";
import PublicChat from "../PublicChat";
import Player from "./Player";

import Trade from "../TradePanel/SentTrade";

export default function PlayerPanel(props) {
  return (
    <Row>
      <Col>
        {" "}
        <Player playerList={props.playerList} />
      </Col>
      {/* <Col md={4}>
        <PublicChat />
      </Col> */}
    </Row>
  );
}
