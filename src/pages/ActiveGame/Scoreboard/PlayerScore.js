import React, { useState, useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Button, Card, Image, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TradePanel from "../TradePanel";
import vPointIcon from "../../../images/icons/vPointIcon.png";
import { iconStyle } from "../../../styles/imgStyles";
import { storeTradePlayer } from "../../../store/tradePlayer/actions";
import {
  selectTradeState,
  selectTradeText,
} from "../../../store/tradePlayer/selectors";
import { avatarStyle } from "../../../styles/imgStyles";

export default function PlayerScore(props) {
  // select userID (sender trade) and playerID (receiver trade)
  //   const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;
  const [buttonStyle, set_buttonStyle] = useState();
  const dispatch = useDispatch();

  const tradeState = useSelector(selectTradeState);

  // const tradeText = useSelector(selectTradeText);

  // useEffect(() => {
  //   if (tradeState !== props.id) {
  //     set_trade("Open trade");
  //   }
  // }, []);

  function handleClick() {
    if (tradeState === props.id) {
      // set_trade("w");
      // console.log("TRADE", tradeState);
      dispatch(
        storeTradePlayer({
          traderId: null,
          traderName: null,
          tradeState: null,
        })
      );
    } else if (tradeState !== props.id) {
      // set_trade("w");
      // console.log("TRADE", tradeState);
      dispatch(
        storeTradePlayer({
          traderId: props.id,
          traderName: props.name,
          tradeState: props.id,
        })
      );
      // console.log(trade);
    }
  }

  return (
    <>
      <Card style={{ height: "200px", width: "250px" }}>
        <Card.Header>
          {props.name} <Image src={vPointIcon} style={iconStyle} />
          {props.vPoint}&nbsp;&nbsp;&nbsp;
          {/* <Button variant="outline-info" size="sm" onClick={handleClick}> */}
          <Button
            variant={tradeState === props.id ? "info" : "outline-info"}
            size="sm"
            onClick={handleClick}
          >
            {/* {trade} */}
            {tradeState === props.id ? <>Close trade</> : <>Open trade</>}
          </Button>
        </Card.Header>
        <Card.Img
          src={require(`../../../images/avatars/${props.img}.png`)}
          style={avatarStyle}
        />
        <Card.Body>
          <Card.Text as="div"></Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
