import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import SentTrade from "./SentTrade";
import IncomingTrade from "./IncomingTrade";
import SuggestTrade from "./SuggestTrade";
import { storeTradePlayer } from "../../../store/tradePlayer/actions";
import { selectPlayerName } from "../../../store/player/selectors";

export default function TradePanel(props) {
  const dispatch = useDispatch();
  const playerName = useSelector(selectPlayerName);

  const { traderName, traderId } = props;

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
                <SuggestTrade traderReceiverId={traderId} />
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </Col>
    </Row>
  );
}
