import React, { useState, useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Col, Row, Form, Image, Alert } from "react-bootstrap";
import Container from "react-bootstrap/Container";

import bugIcon from "../../images/icons/bugIcon.png";
import eggIcon from "../../images/icons/eggIcon.png";
import featherIcon from "../../images/icons/featherIcon.png";
import marketIcon from "../../images/icons/marketIcon.png";
import moneyCashIcon from "../../images/icons/moneyCashIcon.png";
import rareIcon from "../../images/icons/rareIcon.png";
import vPointIcon from "../../images/icons/vPointIcon.png";
import { inlineIconStyle, iconStyle } from "../../styles/imgStyles";
import { useQuery, useSubscription } from "@apollo/react-hooks";
import { GET_TRADES_BY_ID } from "../../graphql/queries";

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

  const { data, error, loading } = useQuery(GET_TRADES_BY_ID);
  if (loading) return "Loading...";
  if (error) return <Alert variant="danger">Error! {error.message}</Alert>;
  console.log(data);

  return (
    <Row>
      <Col>
        <Container>
          <Card>
            <Card.Header>Djimo's trades with Jan</Card.Header>
            <Card.Body>
              <Row>
                <Col>
                  <Trade
                    key={tradeList[0].tradeId}
                    senderName={data.suggested[0].playerSenderId.name}
                    receiverName={data.suggested[0].playerReceiverId.name}
                    moneyCashSender={data.suggested[0].moneyCashSender}
                    moneyCashReceiver={data.suggested[0].moneyCashReceiver}
                    eggSender={data.suggested[0].eggSender}
                    eggReceiver={data.suggested[0].eggReceiver}
                    featherSender={data.suggested[0].featherSender}
                    featherReceiver={data.suggested[0].featherReceiver}
                    bugSender={data.suggested[0].bugSender}
                    bugReceiver={data.suggested[0].bugReceiver}
                  />
                </Col>
                <Col>
                  <Trade
                    key={tradeList[1].tradeId}
                    senderName={data.incoming[0].playerSenderId.name}
                    receiverName={data.incoming[0].playerReceiverId.name}
                    moneyCashSender={data.incoming[0].moneyCashSender}
                    moneyCashReceiver={data.incoming[0].moneyCashReceiver}
                    eggSender={data.incoming[0].eggSender}
                    eggReceiver={data.incoming[0].eggReceiver}
                    featherSender={data.incoming[0].featherSender}
                    featherReceiver={data.incoming[0].featherReceiver}
                    bugSender={data.incoming[0].bugSender}
                    bugReceiver={data.incoming[0].bugReceiver}
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
