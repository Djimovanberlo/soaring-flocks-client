import React, { useState, useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Col, Row, Form, Image, Container } from "react-bootstrap";
import bugIcon from "../../images/icons/bugIcon.png";
import eggIcon from "../../images/icons/eggIcon.png";
import featherIcon from "../../images/icons/featherIcon.png";
import marketIcon from "../../images/icons/marketIcon.png";
import moneyCashIcon from "../../images/icons/moneyCashIcon.png";
import rareIcon from "../../images/icons/rareIcon.png";
import vPointIcon from "../../images/icons/vPointIcon.png";
import { inlineIconStyle, iconStyle } from "../../styles/imgStyles";
import { SUGGEST_TRADE } from "../../graphql/queries";
import { useQuery, useSubscription, useMutation } from "@apollo/react-hooks";

export default function TradeSuggest(props) {
  const [suggestedTrade, set_suggestedTrade] = useState({
    playerSenderId: 3,
    playerReceiverId: 1,
    moneyCashSender: null,
    moneyCashReceiver: null,
    eggSender: null,
    eggReceiver: null,
    featherSender: null,
    featherReceiver: null,
    bugSender: null,
    bugReceiver: null,
    closed: null,
  });

  // playerSenderId
  // playerReceiverId
  // moneyCashSender
  // moneyCashReceiver
  // eggSender
  // eggReceiver
  // featherSender
  // featherReceiver
  // bugSender
  // bugReceiver
  // closed

  const [suggestTrade, { data }] = useMutation(SUGGEST_TRADE);

  const submitTrade = (event) => {
    event.preventDefault();
    console.log("Create trade", suggestedTrade, suggestedTrade.playerSenderId);
    suggestTrade({
      variables: {
        playerSenderId: suggestedTrade.playerSenderId,
        playerReceiverId: suggestedTrade.playerReceiverId,
        moneyCashSender: suggestedTrade.moneyCashSender,
        moneyCashReceiver: suggestedTrade.moneyCashReceiver,
        eggSender: suggestedTrade.eggSender,
        eggReceiver: suggestedTrade.eggReceiver,
        featherSender: suggestedTrade.featherSender,
        featherReceiver: suggestedTrade.featherReceiver,
        bugSender: suggestedTrade.bugSender,
        bugReceiver: suggestedTrade.bugReceiver,
        closed: suggestedTrade.closed,
      },
    });
  };

  return (
    <Container>
      <Card>
        <Card.Header>Suggest new trade</Card.Header>
        <Card.Body>
          <Form>
            <Row>
              <Col>
                Your offer:
                <Row>
                  <Image src={moneyCashIcon} style={iconStyle} />
                  <Form.Group>
                    <Form.Control
                      style={{ width: 60 }}
                      type="number"
                      min="0"
                      id="inputSenderMoneyCash"
                      onClick={(event) => {
                        set_suggestedTrade({
                          ...suggestedTrade,
                          moneyCashSender: event.target.value,
                        });
                      }}
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Image src={eggIcon} style={iconStyle} />
                  <Form.Group>
                    <Form.Control
                      style={{ width: 60 }}
                      type="number"
                      min="0"
                      id="inputSenderEgg"
                      onClick={(event) => {
                        set_suggestedTrade({
                          ...suggestedTrade,
                          eggSender: event.target.value,
                        });
                      }}
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Image src={featherIcon} style={iconStyle} />
                  <Form.Group>
                    <Form.Control
                      style={{ width: 60 }}
                      type="number"
                      min="0"
                      id="inputSenderFeather"
                      onClick={(event) => {
                        set_suggestedTrade({
                          ...suggestedTrade,
                          featherSender: event.target.value,
                        });
                      }}
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Image src={bugIcon} style={iconStyle} />
                  <Form.Group>
                    <Form.Control
                      style={{ width: 60 }}
                      type="number"
                      min="0"
                      id="inputSenderBug"
                      onClick={(event) => {
                        set_suggestedTrade({
                          ...suggestedTrade,
                          bugSender: event.target.value,
                        });
                      }}
                    />
                  </Form.Group>
                </Row>
              </Col>
              <Col>
                Their offer:
                <Row>
                  <Image src={moneyCashIcon} style={iconStyle} />
                  <Form.Group>
                    <Form.Control
                      style={{ width: 60 }}
                      type="number"
                      min="0"
                      id="inputReceiverMoneyCash"
                      onClick={(event) => {
                        set_suggestedTrade({
                          ...suggestedTrade,
                          moneyCashReceiver: event.target.value,
                        });
                      }}
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Image src={eggIcon} style={iconStyle} />
                  <Form.Group>
                    <Form.Control
                      style={{ width: 60 }}
                      type="number"
                      min="0"
                      id="inputReceiverEgg"
                      onClick={(event) => {
                        set_suggestedTrade({
                          ...suggestedTrade,
                          eggReceiver: event.target.value,
                        });
                      }}
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Image src={featherIcon} style={iconStyle} />
                  <Form.Group>
                    <Form.Control
                      style={{ width: 60 }}
                      type="number"
                      min="0"
                      id="inputReceiverFeather"
                      onClick={(event) => {
                        set_suggestedTrade({
                          ...suggestedTrade,
                          featherReceiver: event.target.value,
                        });
                      }}
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Image src={bugIcon} style={iconStyle} />
                  <Form.Group>
                    <Form.Control
                      style={{ width: 60 }}
                      type="number"
                      min="0"
                      id="inputReceiverBug"
                      onClick={(event) => {
                        set_suggestedTrade({
                          ...suggestedTrade,
                          bugReceiver: event.target.value,
                        });
                      }}
                    />
                  </Form.Group>
                </Row>
              </Col>
            </Row>
          </Form>
          <Button variant="outline-info" size="sm" onClick={submitTrade}>
            Suggest trade
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
