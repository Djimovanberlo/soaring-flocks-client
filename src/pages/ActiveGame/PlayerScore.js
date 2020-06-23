import React, { useState, useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Button, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Trade from "./TradePanel";
import vPointIcon from "../../images/icons/vPointIcon.png";
import { iconStyle } from "../../styles/imgStyles";

export default function PlayerScore(props) {
  const [trade, set_trade] = useState(false);
  // select userID (sender trade) and playerID (receiver trade)
  //   const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  function handleClick() {
    set_trade(!trade);
    console.log(trade);
  }

  return (
    <>
      <Card>
        <Card.Header>{props.name}</Card.Header>
        {/* <Card.Img /> */}
        <Card.Body>
          <Card.Text>
            <Image src={vPointIcon} style={iconStyle} />
            {props.vPoints}
          </Card.Text>
          <Button variant="outline-info" size="sm" onClick={handleClick}>
            Open trade
          </Button>
        </Card.Body>
      </Card>
      <div>{trade ? <Trade /> : null}</div>
    </>
  );
}
