import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { login } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Player from "./Player";
import { GET_ALL_PLAYERS_INGAME_SCORE } from "../../graphql/queries";

export default function ActiveGame() {
  const players = [
    {
      id: 1,
      name: "Pietje",
      vPoints: 5,
    },
    {
      id: 2,
      name: "Wolla",
      vPoints: 3,
    },
  ];

  return (
    <>
      <Container style={{ textAlign: "center" }}>
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
            Scoreboard
            {players.map((player) => {
              return (
                <Player
                  key={player.id}
                  name={player.name}
                  vPoints={player.vPoints}
                />
              );
            })}
          </Col>
          <Col>Player card</Col>
          <Col>
            Chatbox (char limit in backend 255: type=string, not type=text
          </Col>
        </Row>
      </Container>
      {/* <Row>
        <Container as={Col} md={{ span: 4, offset: 1 }} className="mt-5">
          Scoreboard
          {players.map((player) => {
            return (
              <Player
                key={player.id}
                name={player.name}
                vPoints={player.vPoints}
              />
            );
          })}
        </Container>
        <Container as={Col} md={{ span: 4, offset: 5 }} className="mt-5">
          Player card
        </Container>
        <Container as={Col} md={{ span: 4, offset: 9 }} className="mt-5">
          Chatbox
        </Container>
      </Row> */}
    </>
  );
}
