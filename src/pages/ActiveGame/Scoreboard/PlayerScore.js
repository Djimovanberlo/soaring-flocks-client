import React from "react";
import { Button, Card, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import vPointIcon from "../../../images/icons/vPointIcon.png";
import { avatarStyle, iconStyle } from "../../../styles/imgStyles";
import { storeTradePlayer } from "../../../store/tradePlayer/actions";
import { selectTradeState } from "../../../store/tradePlayer/selectors";
import { selectPlayerId } from "../../../store/player/selectors";

export default function PlayerScore(props) {
  const dispatch = useDispatch();

  const playerId = useSelector(selectPlayerId);
  const tradeState = useSelector(selectTradeState);

  const handleClick = () => {
    if (tradeState === props.id) {
      dispatch(
        storeTradePlayer({
          traderId: null,
          traderName: null,
          tradeState: null,
        })
      );
    } else if (tradeState !== props.id) {
      dispatch(
        storeTradePlayer({
          traderId: props.id,
          traderName: props.name,
          tradeState: props.id,
        })
      );
    }
  };

  return (
    <>
      <Card style={{ height: "200px", width: "250px" }}>
        <Card.Header>
          {props.name} <Image src={vPointIcon} style={iconStyle} />
          {props.vPoint}&nbsp;&nbsp;&nbsp;
          {playerId !== props.id ? (
            <Button
              variant={tradeState === props.id ? "info" : "outline-info"}
              size="sm"
              onClick={handleClick}
            >
              {tradeState === props.id ? <>Close trade</> : <>Open trade</>}
            </Button>
          ) : (
            <></>
          )}
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
