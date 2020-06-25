import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { login } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import PlayerScore from "./PlayerScore";
import Player from "./Player";
import TradePanel from "./TradePanel";
import PublicChat from "./PublicChat";
import PrivateChat from "./PrivateChat";
import { useQuery, useSubscription } from "@apollo/react-hooks";

export default function ScoreBoard(props) {
  // const sortedListing = newList.sort((a, b) => {
  //   return a.priceEuro - b.priceEuro;
  // });

  return (
    <Col>
      {props.playerList.map((listPlayer) => {
        return (
          <PlayerScore
            key={listPlayer.id}
            name={listPlayer.name}
            vPoint={listPlayer.vPoint}
          />
        );
      })}
    </Col>
  );
}
