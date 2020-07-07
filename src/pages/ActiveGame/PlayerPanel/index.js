import React from "react";
import { Col, Row } from "react-bootstrap";

import Player from "./Player";

export default function PlayerPanel(props) {
  return (
    <Row>
      <Col>
        {" "}
        <Player playerList={props.playerList} />
      </Col>
    </Row>
  );
}
