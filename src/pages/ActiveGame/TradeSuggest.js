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
import { SUGGEST_TRADE } from "../../graphql/mutations";
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
  });

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
                      onChange={(event) => {
                        set_suggestedTrade({
                          ...suggestedTrade,
                          moneyCashSender: parseInt(event.target.value),
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
                      onChange={(event) => {
                        set_suggestedTrade({
                          ...suggestedTrade,
                          eggSender: parseInt(event.target.value),
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
                      onChange={(event) => {
                        set_suggestedTrade({
                          ...suggestedTrade,
                          featherSender: parseInt(event.target.value),
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
                      onChange={(event) => {
                        set_suggestedTrade({
                          ...suggestedTrade,
                          bugSender: parseInt(event.target.value),
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
                      onChange={(event) => {
                        set_suggestedTrade({
                          ...suggestedTrade,
                          moneyCashReceiver: parseInt(event.target.value),
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
                      onChange={(event) => {
                        set_suggestedTrade({
                          ...suggestedTrade,
                          eggReceiver: parseInt(event.target.value),
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
                      onChange={(event) => {
                        set_suggestedTrade({
                          ...suggestedTrade,
                          featherReceiver: parseInt(event.target.value),
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
                      onChange={(event) => {
                        set_suggestedTrade({
                          ...suggestedTrade,
                          bugReceiver: parseInt(event.target.value),
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
