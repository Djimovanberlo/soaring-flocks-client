import React, { useState, useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Col, Row, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useQuery, useSubscription, useMutation } from "@apollo/react-hooks";
import { CLOSE_TRADE, ACCEPT_TRADE } from "../../graphql/queries";

import bugIcon from "../../images/icons/bugIcon.png";
import eggIcon from "../../images/icons/eggIcon.png";
import featherIcon from "../../images/icons/featherIcon.png";
import marketIcon from "../../images/icons/marketIcon.png";
import moneyCashIcon from "../../images/icons/moneyCashIcon.png";
import rareIcon from "../../images/icons/rareIcon.png";
import vPointIcon from "../../images/icons/vPointIcon.png";
import { inlineIconStyle, iconStyle } from "../../styles/imgStyles";

export default function Trade(props) {
  const [closeTrade, { data }] = useMutation(CLOSE_TRADE);
  const [acceptTrade] = useMutation(ACCEPT_TRADE);

  const tradeAccepter = (event) => {
    event.preventDefault();
    console.log("ACCEPT TRADE");
    acceptTrade({
      id: props.tradeId,
      playerSenderId: props.playerSenderId,
      playerReceiverId: props.playerReceiverId,
      moneyCashSender: props.moneyCashSender,
      moneyCashReceiver: props.moneyCashReceiver,
      eggSender: props.eggSender,
      eggReceiver: props.eggReceiver,
      featherSender: props.featherSender,
      featherReceiver: props.featherReceiver,
      bugSender: props.bugSender,
      bugReceiver: props.bugReceiver,
    });
  };

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

  const buttonChecker = (playerSenderId) => {
    if (playerSenderId === 1) {
      return (
        <Row>
          <Col>
            <Button
              variant="outline-danger"
              size="sm"
              onClick={(event) => {
                console.log("Cancel trade");
                event.preventDefault();
                closeTrade({ variables: { id: props.tradeId, closed: true } });
              }}
            >
              Cancel
            </Button>
          </Col>
        </Row>
      );
    } else {
      return (
        <Row>
          <Col>
            <Button variant="outline-success" size="sm" onClick={tradeAccepter}>
              Accept
            </Button>
          </Col>
          <Col>
            <Button
              variant="outline-danger"
              size="sm"
              onClick={(event) => {
                console.log("Cancel trade");
                event.preventDefault();
                closeTrade({ variables: { id: props.tradeId, closed: true } });
              }}
            >
              Decline
            </Button>
          </Col>
        </Row>
      );
    }
  };

  console.log("HWALLOOO", props.playerSenderId);

  return (
    <Card>
      {!props.closed ? (
        <>
          <Card.Header>
            {props.playerSenderId === 1 ? (
              <>Suggested Trade</>
            ) : (
              <>Incoming Trade </>
            )}
          </Card.Header>
          <Card.Body>
            <Card.Text as="div">
              <Row>
                <Col>
                  {props.senderName} offers: <br></br>
                  {noValueChecker(props.moneyCashSender, moneyCashIcon)}
                  {noValueChecker(props.eggSender, eggIcon)}
                  {noValueChecker(props.featherSender, featherIcon)}
                  {noValueChecker(props.bugSender, bugIcon)}
                </Col>
                <Col>
                  <Row>{props.receiverName} offers:</Row>
                  {noValueChecker(props.moneyCashReceiver, moneyCashIcon)}
                  {noValueChecker(props.eggReceiver, eggIcon)}
                  {noValueChecker(props.featherReceiver, featherIcon)}
                  {noValueChecker(props.bugReceiver, bugIcon)}
                </Col>
              </Row>
            </Card.Text>
            <br></br>
            {buttonChecker(props.playerSenderId)}
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
