import React, { useState, useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Button, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TradePanel from "./TradePanel";
import vPointIcon from "../../images/icons/vPointIcon.png";
import { iconStyle } from "../../styles/imgStyles";
import { storeTradePlayer } from "../../store/tradePlayer/actions";
import { selectTradeState } from "../../store/tradePlayer/selectors";

export default function PlayerScore(props) {
  const [trade, set_trade] = useState(false);
  // select userID (sender trade) and playerID (receiver trade)
  //   const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;
  const dispatch = useDispatch();

  const tradeState = useSelector(selectTradeState);

  function handleClick() {
    // set_trade(!trade);
    dispatch(
      storeTradePlayer({
        traderId: props.id,
        traderName: props.name,
        tradeState: !tradeState,
      })
    );
    // console.log(trade);
  }

  return (
    <>
      <Card>
        <Card.Header>
          {props.name} <Image src={vPointIcon} style={iconStyle} />
          {props.vPoint}
        </Card.Header>
        <Card.Img src={require(`../../images/avatars/${props.img}.png`)} />
        <Card.Body>
          <Card.Text as="div"></Card.Text>
          <Button variant="outline-info" size="sm" onClick={handleClick}>
            {!tradeState ? <>Open trade</> : <>Close trade</>}
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
