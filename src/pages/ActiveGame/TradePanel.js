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
import SentTrade from "./SentTrade";
import IncomingTrade from "./IncomingTrade";
import TradeSuggest from "./TradeSuggest";
import PublicChat from "./PublicChat";

export default function TradePanel(props) {
  // const { data, error, loading } = useQuery(GET_TRADES_BY_ID);
  // if (loading) return "Loading...";
  // if (error) return <Alert variant="danger">Error! {error.message}</Alert>;
  // console.log("GOEIEDAG", data);

  return (
    <Row>
      <Col>
        <Container>
          <Card>
            <Card.Header>Djimo's trades with Jan</Card.Header>
            <Card.Body>
              <Row>
                <Col>
                  <SentTrade />
                </Col>
                <Col>
                  <IncomingTrade />
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
        <PublicChat />
      </Col>
    </Row>
    // YOU CAN ONLY OFFER 1 TRADE PER PLAYER AT A TIME (to limit spam options)
    // this means a-b AND b-a can be active at the same time, but no more than that
  );
}
