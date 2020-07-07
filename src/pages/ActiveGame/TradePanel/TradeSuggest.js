import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Row,
  Form,
  Image,
  Container,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { useMutation } from "@apollo/react-hooks";

import { iconStyle } from "../../../styles/imgStyles";
import bugIcon from "../../../images/icons/bugIcon.png";
import eggIcon from "../../../images/icons/eggIcon.png";
import featherIcon from "../../../images/icons/featherIcon.png";
import moneyCashIcon from "../../../images/icons/moneyCashIcon.png";
import { SUGGEST_TRADE } from "../../../graphql/mutations";
import { selectPlayerId, selectPlayer } from "../../../store/player/selectors";

export default function TradeSuggest(props) {
  const playerId = useSelector(selectPlayerId);
  const player = useSelector(selectPlayer);

  const [suggestedTrade, set_suggestedTrade] = useState({
    playerSenderId: playerId,
    playerReceiverId: props.traderReceiverId,
    moneyCashSender: null,
    moneyCashReceiver: null,
    eggSender: null,
    eggReceiver: null,
    featherSender: null,
    featherReceiver: null,
    bugSender: null,
    bugReceiver: null,
  });

  const [suggestTrade] = useMutation(SUGGEST_TRADE);

  const submitTrade = () => {
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
    window.location.reload(false);
    // This force reload is to display updated values after having attacked. Upcoming feature is to use a graphQL subscription for this, instead of this awkward reload.
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
                      max={player.moneyCash}
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
                      max={player.egg}
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
                      max={player.feather}
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
                      max={player.bug}
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
                      max="10"
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
                      max="10"
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
                      max="10"
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
                      max="10"
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
