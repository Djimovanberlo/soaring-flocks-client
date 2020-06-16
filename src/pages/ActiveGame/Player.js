import React, { useState, useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Trade from "./Trade";

export default function Artwork(props) {
  const [trade, set_trade] = useState(false);
  // select userID (sender trade) and playerID (receiver trade)
  //   const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  function handleClick() {
    set_trade(!trade);
    console.log(trade);
  }

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>Victory points: {props.vPoints}</Card.Text>
          <Button variant="primary" onClick={handleClick}>
            Open trade
          </Button>
        </Card.Body>
      </Card>
      <div>{trade ? <Trade /> : null}</div>
    </>
  );
}
