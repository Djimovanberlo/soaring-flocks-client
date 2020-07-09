import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Card, Col, Row, Image, Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useQuery, useMutation } from "@apollo/react-hooks";

import { inlineIconStyle } from "../../../styles/imgStyles";
import bugIcon from "../../../images/icons/bugIcon.png";
import eggIcon from "../../../images/icons/eggIcon.png";
import featherIcon from "../../../images/icons/featherIcon.png";
import moneyCashIcon from "../../../images/icons/moneyCashIcon.png";
import { CLOSE_TRADE, ACCEPT_TRADE } from "../../../graphql/mutations";
import { GET_TRADES_BY_ID } from "../../../graphql/queries";
import { selectPlayerId } from "../../../store/player/selectors";

export default function IncomingTrade(props) {
  const history = useHistory();

  const playerId = useSelector(selectPlayerId);

  const [closeTrade] = useMutation(CLOSE_TRADE);
  const [acceptTrade] = useMutation(ACCEPT_TRADE);

  const { data, error, loading } = useQuery(GET_TRADES_BY_ID, {
    variables: {
      playerSenderId: props.traderSenderId,
      playerReceiverId: playerId,
    },
  });
  if (loading) return "Loading...";
  if (error) return <Alert variant="danger">Error! {error.message}</Alert>;

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

    const tradeAccepter = () => {
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
      history.push("/");
      // window.location.reload(false);
    };
    // This force reload is to display updated values after having attacked. Upcoming feature is to use a graphQL subscription for this, instead of this awkward reload.

    const noValueChecker = (resource, resourceIcon) => {
      if (resource !== 0) {
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
                    onClick={() => {
                      closeTrade({
                        variables: { id, closed: true },
                      });
                      history.push("/");
                      // window.location.reload(false);
                      // This force reload is to display updated values after having attacked. Upcoming feature is to use a graphQL subscription for this, instead of this awkward reload.
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
