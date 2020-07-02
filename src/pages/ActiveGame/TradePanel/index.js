import React, { useState, useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Col, Row, Form, Image, Alert } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useDispatch, useSelector } from "react-redux";

import { inlineIconStyle, iconStyle } from "../../../styles/imgStyles";
import { useQuery, useSubscription } from "@apollo/react-hooks";
import { GET_TRADES_BY_ID } from "../../../graphql/queries";
import { storeTradePlayer } from "../../../store/tradePlayer/actions";
import { selectPlayerName } from "../../../store/player/selectors";

import PrivateChat from "../PrivateChat";
import SentTrade from "./SentTrade";
import IncomingTrade from "./IncomingTrade";
import TradeSuggest from "./TradeSuggest";
import PublicChat from "../PublicChat";

export default function TradePanel(props) {
  const dispatch = useDispatch();
  const playerName = useSelector(selectPlayerName);
  // const { data, error, loading } = useQuery(GET_TRADES_BY_ID);
  // if (loading) return "Loading...";
  // if (error) return <Alert variant="danger">Error! {error.message}</Alert>;
  // console.log("GOEIEDAG", data);
  // console.log("WOJWOJWOJWOJWOJ", props);
  const { traderName, traderId } = props;
  // console.log("SOMEDATA", traderName, traderId);
  // select loggedInPlayerID
  return (
    <Row>
      <Col>
        <Container>
          <Card>
            <Card.Header>
              {playerName}'s trades with {traderName}
              &nbsp;&nbsp;&nbsp;
              <Button
                variant="outline-danger"
                size="sm"
                onClick={() =>
                  dispatch(
                    storeTradePlayer({
                      traderId: null,
                      traderName: null,
                      tradeState: null,
                    })
                  )
                }
              >
                Close trade
              </Button>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col>
                  <SentTrade traderReceiverId={traderId} />
                </Col>
                <Col>
                  <IncomingTrade traderSenderId={traderId} />
                </Col>
              </Row>
              <br></br>
              <Row>
                <TradeSuggest traderReceiverId={traderId} />
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </Col>
    </Row>
    // YOU CAN ONLY OFFER 1 TRADE PER PLAYER AT A TIME (to limit spam options)
    // this means a-b AND b-a can be active at the same time, but no more than that
  );
}
