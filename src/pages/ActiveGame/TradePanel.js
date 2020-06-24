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
                    tradeId={data.suggested[0].id}
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
                    playerSender={data.suggested[0].playerSenderId}
                    closed={data.suggested[0].closed}
                    playerSenderId={data.suggested[0].playerSenderId.id}
                    playerReceiverId={data.suggested[0].playerReceiverId.id}
                  />
                </Col>
                <Col>
                  <Trade
                    tradeId={data.incoming[0].id}
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
                    closed={data.incoming[0].closed}
                    playerSenderId={data.incoming[0].playerSenderId.id}
                    playerReceiverId={data.incoming[0].playerReceiverId.id}
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
