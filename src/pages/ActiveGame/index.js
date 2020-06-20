import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { login } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import PlayerCard from "./PlayerCard";
import Player from "./Player";
import { GET_ALL_PLAYERS_INGAME_SCORE } from "../../graphql/queries";

export default function ActiveGame() {
  const playerList = [
    {
      id: 1,
      name: "Pietje",
      vPoints: 2,
    },
    {
      id: 2,
      name: "Wolla",
      vPoints: 3,
    },
    {
      id: 3,
      name: "Djimo",
      vPoints: 5,
    },
  ];

  const player = {
    name: "Djimo",
    resources: {
      moneyCash: 9,
      egg: 0,
      feather: 2,
      bug: 1,
      vPoints: 5,
      mMarket: 2,
      rMarket: 1,
      vMarket: 1,
    },
  };

  return (
    <>
      <Container as={Col} md={{ span: 6, offset: 5 }} className="mt-5">
        <Row>
          <Col>
            <h2>Game Title</h2>
          </Col>
        </Row>
      </Container>
      <Container style={{ textAlign: "center" }}>
        <Row>
          <Col>
            <h6>Turn X. Game ends in Y turns</h6>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <p style={{ textAlign: "center" }}>Scoreboard</p>
            {playerList.map((listPlayer) => {
              return (
                <PlayerCard
                  key={listPlayer.id}
                  name={listPlayer.name}
                  vPoints={listPlayer.vPoints}
                />
              );
            })}
          </Col>
          <Col sm={7}>
            <p>{player.name}</p>
            <Player
              name={player.name}
              resources={player.resources}
              playerList={playerList}
            />
          </Col>
          <Col>
            <p style={{ textAlign: "center" }}>Chatbox</p>
            <p>(char limit in backend 255: type=string, not type=text</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
