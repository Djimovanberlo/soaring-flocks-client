import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { login } from "../../../store/user/actions";
import { selectToken } from "../../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import PlayerScore from "./PlayerScore";
import Player from "../PlayerPanel/Player";
import TradePanel from "../TradePanel";
import PublicChat from "../PublicChat";
import PrivateChat from "../PrivateChat";
import { useQuery, useSubscription } from "@apollo/react-hooks";

export default function ScoreBoard(props) {
  // const sortedListing = newList.sort((a, b) => {
  //   return a.priceEuro - b.priceEuro;
  // });
  const playerList = props.playerList.sort((a, b) => {
    return b.vPoint - a.vPoint;
  });
  // console.log("PLAYERLIST ONE", playerList);

  return (
    <Col style={{ overflowY: "scroll", height: "1000px" }}>
      {playerList.map((listPlayer) => {
        return (
          <PlayerScore
            key={listPlayer.id}
            id={listPlayer.id}
            name={listPlayer.name}
            vPoint={listPlayer.vPoint}
            img={listPlayer.img}
          />
        );
      })}
      <br></br>
      <br></br>
      <br></br>
      {/* <Button
        variant="danger"
        type="submit"
        onClick={() => console.log("LEAVE GAME")}
      >
        Leave Game
      </Button> */}
    </Col>
  );
}
