import React, { useState, useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Col, Row, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";

import bugIcon from "../../images/icons/bugIcon.png";
import eggIcon from "../../images/icons/eggIcon.png";
import featherIcon from "../../images/icons/featherIcon.png";
import marketIcon from "../../images/icons/marketIcon.png";
import moneyCashIcon from "../../images/icons/moneyCashIcon.png";
import rareIcon from "../../images/icons/rareIcon.png";
import vPointIcon from "../../images/icons/vPointIcon.png";
import { inlineIconStyle, iconStyle } from "../../styles/imgStyles";

export default function Trade(props) {
  const noValueChecker = (resource, resourceIcon) => {
    if (resource != 0) {
      return (
        <Row>
          {resource} <Image src={resourceIcon} style={inlineIconStyle} />
        </Row>
      );
    } else {
      return <Row></Row>;
    }
  };

  const buttonChecker = (senderId) => {
    if (senderId === 1) {
      return (
        <Row>
          <Col>{null}</Col>
          <Col>
            <Button
              variant="primary"
              onClick={(event) => {
                console.log("Cancel trade");
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
            <Button
              variant="primary"
              onClick={(event) => {
                console.log("Accept trade");
              }}
            >
              Accept
            </Button>
          </Col>
          <Col>
            <Button
              variant="primary"
              onClick={(event) => {
                console.log("Decline trade");
              }}
            >
              Decline
            </Button>
          </Col>
        </Row>
      );
    }
  };

  return (
    <Card>
      <Card.Body>
        <Row>
          <Col>
            <Row>{props.senderName} offers:</Row>
            {noValueChecker(props.moneyCashSender, moneyCashIcon)}
            {noValueChecker(props.eggSender, eggIcon)}
            {noValueChecker(props.featherSender, featherIcon)}
            {noValueChecker(props.bugSender, bugIcon)}
            {noValueChecker(props.vPointsSender, vPointIcon)}
          </Col>
          <Col>
            <Row>{props.receiverName} offers:</Row>
            {noValueChecker(props.moneyCashReceiver, moneyCashIcon)}
            {noValueChecker(props.eggReceiver, eggIcon)}
            {noValueChecker(props.featherReceiver, featherIcon)}
            {noValueChecker(props.bugReceiver, bugIcon)}
            {noValueChecker(props.vPointsReceiver, vPointIcon)}
          </Col>
        </Row>
        <Row>{buttonChecker(props.senderId)}</Row>
      </Card.Body>
    </Card>
  );
}
