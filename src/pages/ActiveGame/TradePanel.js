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

import Trade from "./Trade";

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
    <Container>
      {tradeList.map((trade) => {
        return (
          <Trade
            key={trade.tradeId}
            senderId={trade.senderId}
            receiverId={trade.receiverId}
            senderName={trade.senderName}
            receiverName={trade.receiverName}
            moneyCashSender={trade.moneyCashSender}
            moneyCashReceiver={trade.moneyCashReceiver}
            eggSender={trade.eggSender}
            eggReceiver={trade.eggReceiver}
            featherSender={trade.featherSender}
            featherReceiver={trade.featherReceiver}
            bugSender={trade.bugSender}
            bugReceiver={trade.bugReceiver}
            vPointsSender={trade.vPointsSender}
            vPointsReceiver={trade.vPointsReceiver}
          />
        );
      })}

      <Card>
        <Card.Body>
          <Row>
            <Form>
              <Row>
                <Col>You offer:</Col>
                <Col>Jan offers:</Col>
              </Row>
              <Row>
                <Col>
                  <Image src={moneyCashIcon} style={iconStyle} />
                </Col>
                <Col md={{ span: 2, align: "center" }}>
                  <Form.Control
                    width={1}
                    type="number"
                    min="0"
                    id="inputSenderMoneyCash"
                  />
                </Col>
                <Col>
                  <Image src={moneyCashIcon} style={iconStyle} />
                </Col>
                <Col md={{ span: 2 }}>
                  <Form.Control
                    width={1}
                    type="number"
                    min="0"
                    id="inputSenderMoneyCash"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Image src={eggIcon} style={iconStyle} />
                </Col>
                <Col md={{ span: 2, align: "center" }}>
                  <Form.Control
                    width={1}
                    type="number"
                    min="0"
                    id="inputSenderMoneyCash"
                  />
                </Col>
                <Col>
                  <Image src={eggIcon} style={iconStyle} />
                </Col>
                <Col md={{ span: 2 }}>
                  <Form.Control
                    width={1}
                    type="number"
                    min="0"
                    id="inputSenderMoneyCash"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Image src={featherIcon} style={iconStyle} />
                </Col>
                <Col md={{ span: 2, align: "center" }}>
                  <Form.Control
                    width={1}
                    type="number"
                    min="0"
                    id="inputSenderMoneyCash"
                  />
                </Col>
                <Col>
                  <Image src={featherIcon} style={iconStyle} />
                </Col>
                <Col md={{ span: 2 }}>
                  <Form.Control
                    width={1}
                    type="number"
                    min="0"
                    id="inputSenderMoneyCash"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Image src={bugIcon} style={iconStyle} />
                </Col>
                <Col md={{ span: 2, align: "center" }}>
                  <Form.Control
                    width={1}
                    type="number"
                    min="0"
                    id="inputSenderMoneyCash"
                  />
                </Col>
                <Col>
                  <Image src={bugIcon} style={iconStyle} />
                </Col>
                <Col md={{ span: 2 }}>
                  <Form.Control
                    width={1}
                    type="number"
                    min="0"
                    id="inputSenderMoneyCash"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Image src={vPointIcon} style={iconStyle} />
                </Col>
                <Col md={{ span: 2, align: "center" }}>
                  <Form.Control
                    width={1}
                    type="number"
                    min="0"
                    id="inputSenderMoneyCash"
                  />
                </Col>
                <Col>
                  <Image src={vPointIcon} style={iconStyle} />
                </Col>
                <Col md={{ span: 2 }}>
                  <Form.Control
                    width={1}
                    type="number"
                    min="0"
                    id="inputSenderMoneyCash"
                  />
                </Col>
              </Row>
            </Form>
          </Row>
          <Button
            variant="primary"
            onClick={(event) => {
              console.log("Create trade");
            }}
          >
            Suggest trade
          </Button>
        </Card.Body>
      </Card>
    </Container>
    // YOU CAN ONLY OFFER 1 TRADE PER PLAYER AT A TIME (to limit spam options)
    // this means a-b AND b-a can be active at the same time, but no more than that
  );
}
