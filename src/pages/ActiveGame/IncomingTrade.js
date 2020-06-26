import React, { useState, useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Col, Row, Image, Alert } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useQuery, useSubscription, useMutation } from "@apollo/react-hooks";
import { CLOSE_TRADE, ACCEPT_TRADE } from "../../graphql/mutations";
import { GET_TRADES_BY_ID } from "../../graphql/queries";

import bugIcon from "../../images/icons/bugIcon.png";
import eggIcon from "../../images/icons/eggIcon.png";
import featherIcon from "../../images/icons/featherIcon.png";
import marketIcon from "../../images/icons/marketIcon.png";
import moneyCashIcon from "../../images/icons/moneyCashIcon.png";
import rareIcon from "../../images/icons/rareIcon.png";
import vPointIcon from "../../images/icons/vPointIcon.png";
import { inlineIconStyle, iconStyle } from "../../styles/imgStyles";

export default function IncomingTrade(props) {
  const [closeTrade] = useMutation(CLOSE_TRADE);
  const [acceptTrade] = useMutation(ACCEPT_TRADE);
  const { data, error, loading } = useQuery(GET_TRADES_BY_ID, {
    variables: {
      playerSenderId: 2,
      playerReceiverId: 1,
    },
  });
  if (loading) return "Loading...";
  if (error) return <Alert variant="danger">Error! {error.message}</Alert>;
  console.log("GOEIEDAG INCOMING", data);

  if (data.getTradesById === null) {
    return (
      <>
        <Card.Header>No open trade</Card.Header>
        <Card.Body>{""}</Card.Body>
      </>
    );
  } else {
    const {
      id,
      moneyCashSender,
      moneyCashReceiver,
      eggSender,
      eggReceiver,
      featherSender,
      featherReceiver,
      bugSender,
      bugReceiver,
    } = data.getTradesById;

    const tradeAccepter = (event) => {
      // event.preventDefault();
      console.log(
        "ACCEPT TRADE",
        "a",
        id,
        "b",
        data.getTradesById.playerSenderId.id,
        "c",
        data.getTradesById.playerReceiverId.id,
        "d",
        moneyCashSender,
        "e",
        moneyCashReceiver,
        "f",
        eggSender,
        "g",
        eggReceiver,
        "h",
        featherSender,
        "i",
        featherReceiver,
        "j",
        bugSender,
        "k",
        bugReceiver
      );
      acceptTrade({
        variables: {
          id,
          playerSenderId: data.getTradesById.playerSenderId.id,
          playerReceiverId: data.getTradesById.playerReceiverId.id,
          moneyCashSender,
          moneyCashReceiver,
          eggSender,
          eggReceiver,
          featherSender,
          featherReceiver,
          bugSender,
          bugReceiver,
        },
      });
      window.location.reload(false);
    };

    // id
    // playerSenderId {
    //   id
    // }
    // playerReceiverId {
    //   id
    // }
    // moneyCashSender
    // moneyCashReceiver
    // eggSender
    // eggReceiver
    // featherSender
    // featherReceiver
    // bugSender
    // bugReceiver

    const noValueChecker = (resource, resourceIcon) => {
      if (resource != 0) {
        return (
          <>
            <Image src={resourceIcon} style={inlineIconStyle} />
            {resource}
            <br></br>
          </>
        );
      } else {
        return <Row></Row>;
      }
    };

    return (
      <Card>
        {!data || !data.getTradesById.closed ? (
          <>
            <Card.Header>Incoming trade</Card.Header>
            <Card.Body>
              <Card.Text as="div">
                <Row>
                  <Col>
                    {data.getTradesById.playerSenderId.name} offers: <br></br>
                    {noValueChecker(moneyCashSender, moneyCashIcon)}
                    {noValueChecker(eggSender, eggIcon)}
                    {noValueChecker(featherSender, featherIcon)}
                    {noValueChecker(bugSender, bugIcon)}
                  </Col>
                  <Col>
                    <Row>
                      {data.getTradesById.playerReceiverId.name} offers:
                    </Row>
                    {noValueChecker(moneyCashReceiver, moneyCashIcon)}
                    {noValueChecker(eggReceiver, eggIcon)}
                    {noValueChecker(featherReceiver, featherIcon)}
                    {noValueChecker(bugReceiver, bugIcon)}
                  </Col>
                </Row>
              </Card.Text>
              <br></br>
              <Row>
                <Col>
                  <Button
                    variant="outline-success"
                    size="sm"
                    onClick={tradeAccepter}
                  >
                    Accept
                  </Button>
                </Col>
                <Col>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={(event) => {
                      console.log("Decline trade");
                      event.preventDefault();
                      closeTrade({
                        variables: { id, closed: true },
                      });
                      window.location.reload(false);
                    }}
                  >
                    Decline
                  </Button>
                </Col>
              </Row>
            </Card.Body>{" "}
          </>
        ) : (
          <>
            <Card.Header>No open trade</Card.Header>
            <Card.Body>{""}</Card.Body>
          </>
        )}
      </Card>
    );
  }
}
