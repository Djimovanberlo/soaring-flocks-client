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
import PrivateChat from "./PrivateChat";

import Trade from "./Trade";
import TradeSuggest from "./TradeSuggest";

export default function TradePanel(props) {
  const tradeList = [
    {
      tradeId: 1,
      senderId: 1,
      receiverId: 2,
      senderName: "Djimo",
      receiverName: "Jan",
      moneyCashSender: 3,
      moneyCashReceiver: 0,
      eggSender: 1,
      eggReceiver: 0,
      featherSender: 0,
      featherReceiver: 1,
      bugSender: 0,
      bugReceiver: 1,
      vPointsSender: 0,
      vPointsReceiver: 0,
    },
    {
      tradeId: 2,
      senderId: 2,
      receiverId: 1,
      senderName: "Jan",
      receiverName: "Djimo",
      moneyCashSender: 0,
      moneyCashReceiver: 5,
      eggSender: 0,
      eggReceiver: 0,
      featherSender: 1,
      featherReceiver: 0,
      bugSender: 0,
      bugReceiver: 1,
      vPointsSender: 1,
      vPointsReceiver: 0,
    },
  ];

  return (
    <Row>
      <Col>
        <Container>
          <Card>
            <Card.Body>
              <Row>
                <Col>
                  <Trade
                    key={tradeList[0].tradeId}
                    senderId={tradeList[0].senderId}
                    receiverId={tradeList[0].receiverId}
                    senderName={tradeList[0].senderName}
                    receiverName={tradeList[0].receiverName}
                    moneyCashSender={tradeList[0].moneyCashSender}
                    moneyCashReceiver={tradeList[0].moneyCashReceiver}
                    eggSender={tradeList[0].eggSender}
                    eggReceiver={tradeList[0].eggReceiver}
                    featherSender={tradeList[0].featherSender}
                    featherReceiver={tradeList[0].featherReceiver}
                    bugSender={tradeList[0].bugSender}
                    bugReceiver={tradeList[0].bugReceiver}
                    vPointsSender={tradeList[0].vPointsSender}
                    vPointsReceiver={tradeList[0].vPointsReceiver}
                  />
                </Col>
                <Col>
                  <Trade
                    key={tradeList[1].tradeId}
                    senderId={tradeList[1].senderId}
                    receiverId={tradeList[1].receiverId}
                    senderName={tradeList[1].senderName}
                    receiverName={tradeList[1].receiverName}
                    moneyCashSender={tradeList[1].moneyCashSender}
                    moneyCashReceiver={tradeList[1].moneyCashReceiver}
                    eggSender={tradeList[1].eggSender}
                    eggReceiver={tradeList[1].eggReceiver}
                    featherSender={tradeList[1].featherSender}
                    featherReceiver={tradeList[1].featherReceiver}
                    bugSender={tradeList[1].bugSender}
                    bugReceiver={tradeList[1].bugReceiver}
                    vPointsSender={tradeList[1].vPointsSender}
                    vPointsReceiver={tradeList[1].vPointsReceiver}
                  />
                </Col>
              </Row>
              <br></br>
              <Row>
                <TradeSuggest />
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </Col>
      <Col md={4}>
        <PrivateChat />
      </Col>
    </Row>
    // YOU CAN ONLY OFFER 1 TRADE PER PLAYER AT A TIME (to limit spam options)
    // this means a-b AND b-a can be active at the same time, but no more than that
  );
}
